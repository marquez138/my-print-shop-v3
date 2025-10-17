export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyUserRejected } from '@/lib/notify'

type Ctx = { params: Promise<{ id: string }> }

function json(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

async function assertAdmin(userId?: string | null) {
  if (!userId) return false
  const me = await prisma.user.findFirst({
    where: { clerkUserId: userId },
    select: { role: true, id: true },
  })
  return me?.role === 'ADMIN' ? me : null
}

export async function POST(req: Request, ctx: Ctx) {
  const { userId } = await auth()
  const admin = await assertAdmin(userId)
  if (!admin) return json('Forbidden', 403)

  const { id } = await ctx.params

  // Optional reason/comment from admin
  let body: { reason?: string } | null = null
  try {
    body = (await req.json()) as { reason?: string }
  } catch {
    // ignore empty body
  }
  const reason = body?.reason?.trim()

  // Must be submitted to reject (you can allow draft → rejected if desired)
  const design = await prisma.design.findUnique({
    where: { id },
    include: { user: { select: { email: true } } },
  })
  if (!design) return json('Design not found', 404)
  if (design.status !== 'submitted') {
    return json(
      `Only submitted designs can be rejected (current: ${design.status}).`,
      400
    )
  }

  const updated = await prisma.$transaction(async (tx) => {
    const d = await tx.design.update({
      where: { id },
      data: { status: 'rejected' },
      include: {
        user: { select: { email: true } },
        placements: true,
        comments: { orderBy: { createdAt: 'asc' } },
        lineItems: true,
      },
    })

    // Persist admin comment if provided (optional, but useful)
    if (reason) {
      await tx.designComment.create({
        data: {
          designId: id,
          authorId: admin.id, // admin's User.id
          body: reason,
        },
      })
    }

    return d
  })

  if (updated.user?.email) {
    notifyUserRejected(updated.user.email, reason).catch((err) =>
      console.error('[notifyUserRejected] error:', err)
    )
  }

  return NextResponse.json({ ok: true, design: updated })
}
