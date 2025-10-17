// lib/notify.ts
import { Resend } from 'resend'

const RESEND_API_KEY = process.env.RESEND_API_KEY || ''
const MAIL_FROM = process.env.MAIL_FROM || 'no-reply@example.com'
const MAIL_ADMIN_TO = (process.env.MAIL_ADMIN_TO || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

if (!RESEND_API_KEY) {
  console.warn('[notify] RESEND_API_KEY is not set')
}
if (!MAIL_FROM) {
  console.warn('[notify] MAIL_FROM is not set')
}
if (MAIL_ADMIN_TO.length === 0) {
  console.warn(
    '[notify] MAIL_ADMIN_TO is empty; admin notifications will be skipped'
  )
}

const resend = new Resend(RESEND_API_KEY)

/** Admin ping when a user submits a design */
export async function notifyAdminNewSubmission(payload: {
  designId: string
  productId?: string | null
  userEmail?: string | null
  appUrl?: string
}) {
  if (MAIL_ADMIN_TO.length === 0) return

  const appUrl = payload.appUrl || process.env.NEXT_PUBLIC_APP_URL || ''
  const adminLink = appUrl
    ? `${appUrl.replace(/\/$/, '')}/admin/designs/${payload.designId}`
    : ''

  const subject = `New design submitted: ${payload.designId}`
  const html = `
    <html>
      <body>
        <h2>New Design Submitted</h2>
        <p><b>Design:</b> ${payload.designId}</p>
        ${
          payload.productId ? `<p><b>Product:</b> ${payload.productId}</p>` : ''
        }
        ${payload.userEmail ? `<p><b>User:</b> ${payload.userEmail}</p>` : ''}
        ${adminLink ? `<p><a href="${adminLink}">Review in Admin</a></p>` : ''}
      </body>
    </html>
  `
  const text = `New Design Submitted
Design: ${payload.designId}
${payload.productId ? `Product: ${payload.productId}\n` : ''}${
    payload.userEmail ? `User: ${payload.userEmail}\n` : ''
  }${adminLink ? `Review: ${adminLink}\n` : ''}`

  await resend.emails.send({
    from: MAIL_FROM,
    to: MAIL_ADMIN_TO,
    subject,
    html,
    text,
  })
}

/** User ping when an admin approves/rejects a design */
export async function notifyUserDecision(payload: {
  to: string
  designId: string
  decision: 'approved' | 'rejected'
  comment?: string | null
  appUrl?: string
}) {
  if (!payload.to) return

  const appUrl = payload.appUrl || process.env.NEXT_PUBLIC_APP_URL || ''
  const userLink = appUrl
    ? `${appUrl.replace(/\/$/, '')}/designs/${payload.designId}`
    : ''

  const subject =
    payload.decision === 'approved'
      ? `Your design ${payload.designId} was approved`
      : `Your design ${payload.designId} was rejected`

  const bodyIntro =
    payload.decision === 'approved'
      ? `Good news — your design has been approved.`
      : `Unfortunately, your design was rejected.`

  const html = `
    <html>
      <body>
        <h2>${subject}</h2>
        <p>${bodyIntro}</p>
        ${
          payload.comment
            ? `<p><b>Note from admin:</b> ${escapeHtml(payload.comment)}</p>`
            : ''
        }
        ${userLink ? `<p><a href="${userLink}">View your design</a></p>` : ''}
      </body>
    </html>
  `
  const text = `${subject}
${bodyIntro}
${payload.comment ? `Admin note: ${payload.comment}\n` : ''}${
    userLink ? `View: ${userLink}\n` : ''
  }`

  await resend.emails.send({
    from: MAIL_FROM,
    to: payload.to,
    subject,
    html,
    text,
  })
}

function escapeHtml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}
