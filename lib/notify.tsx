// lib/notify.ts
import { Resend } from 'resend'
import React from 'react'

const resend = new Resend(process.env.RESEND_API_KEY)
const FROM = process.env.EMAIL_FROM || 'My Print Shop <no-reply@example.com>'
const ADMINS = (process.env.ADMIN_EMAILS || '')
  .split(',')
  .map((s) => s.trim())
  .filter(Boolean)

type SubmissionPayload = {
  designId: string
  productId: string
  userEmail?: string
}

type DecisionPayload = {
  designId: string
  productId: string
  userEmail: string
  decision: 'approved' | 'rejected'
}

// ---------- tiny email “templates” as JSX ----------
function AdminSubmissionEmail({
  designId,
  productId,
  userEmail,
}: SubmissionPayload) {
  return (
    <html>
      <body>
        <h2>New Design Submitted</h2>
        <p>
          <b>Design:</b> {designId}
        </p>
        <p>
          <b>Product:</b> {productId}
        </p>
        {userEmail && (
          <p>
            <b>User:</b> {userEmail}
          </p>
        )}
        <p>
          Review:{' '}
          <a
            href={`${process.env.NEXT_PUBLIC_APP_URL}/admin/designs/${designId}`}
          >
            Admin Review Link
          </a>
        </p>
      </body>
    </html>
  )
}

function UserDecisionEmail({ designId, productId, decision }: DecisionPayload) {
  const title =
    decision === 'approved'
      ? 'Your design was approved 🎉'
      : 'Your design was rejected'
  return (
    <html>
      <body>
        <h2>{title}</h2>
        <p>
          <b>Design:</b> {designId}
        </p>
        <p>
          <b>Product:</b> {productId}
        </p>
        <p>
          View:{' '}
          <a href={`${process.env.NEXT_PUBLIC_APP_URL}/designs/${designId}`}>
            Design Details
          </a>
        </p>
      </body>
    </html>
  )
}

// ---------- public helpers ----------
export async function notifyAdminNewSubmission(payload: SubmissionPayload) {
  if (!resend || !process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY missing; skipping admin submission email.')
    return
  }
  if (!ADMINS.length) {
    console.warn('ADMIN_EMAILS empty; skipping admin submission email.')
    return
  }

  await resend.emails.send({
    from: FROM,
    to: ADMINS,
    subject: `New design submitted: ${payload.designId}`,
    react: AdminSubmissionEmail(payload),
  })
}

export async function notifyUserDecision(payload: DecisionPayload) {
  if (!resend || !process.env.RESEND_API_KEY) {
    console.warn('RESEND_API_KEY missing; skipping user decision email.')
    return
  }
  await resend.emails.send({
    from: FROM,
    to: payload.userEmail,
    subject:
      payload.decision === 'approved'
        ? 'Your design was approved'
        : 'Your design was rejected',
    react: UserDecisionEmail(payload),
  })
}
