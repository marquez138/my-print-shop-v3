// lib/notify.ts
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.NOTIFY_FROM_EMAIL || 'noreply@yourdomain.com'

type SendArgs = {
  to: string | string[]
  subject: string
  html: string
  text?: string
}

async function sendEmail({ to, subject, html, text }: SendArgs) {
  // Use minimal shape supported by Resend — NO react prop.
  await resend.emails.send({
    from: FROM,
    to,
    subject,
    html,
    text,
  })
}

/* User-facing emails */
export async function notifyUserSubmitted(userEmail: string, designId: string) {
  const subject = `Your design was submitted`
  const html = `
    <p>Thanks! Your design <strong>${designId}</strong> was submitted for review.</p>
    <p>We will email you when it’s approved or rejected.</p>`
  await sendEmail({ to: userEmail, subject, html, text: 'Design submitted.' })
}

export async function notifyUserApproved(userEmail: string, designId: string) {
  const subject = `Your design was approved`
  const html = `
    <p>Great news! Your design <strong>${designId}</strong> was approved.</p>
    <p>You can now proceed to checkout.</p>`
  await sendEmail({ to: userEmail, subject, html, text: 'Design approved.' })
}

export async function notifyUserRejected(userEmail: string, reason?: string) {
  const subject = `Your design was rejected`
  const html = `
    <p>We’re sorry—your design was rejected.</p>
    ${reason ? `<p><strong>Reason:</strong> ${reason}</p>` : ''}
    <p>You can start a new design anytime.</p>`
  await sendEmail({
    to: userEmail,
    subject,
    html,
    text: `Design rejected. ${reason ?? ''}`,
  })
}

/* Admin-facing emails (optional) */
export async function notifyAdminNewSubmission(
  adminEmail: string,
  designId: string,
  userEmail: string
) {
  const subject = `New design submitted`
  const html = `
    <p>A new design <strong>${designId}</strong> was submitted by ${userEmail}.</p>
    <p>Review it in the admin dashboard.</p>`
  await sendEmail({
    to: adminEmail,
    subject,
    html,
    text: `New design submitted: ${designId}`,
  })
}
