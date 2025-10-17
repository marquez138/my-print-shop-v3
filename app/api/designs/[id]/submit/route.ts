export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyAdminOfSubmission } from '@/lib/notify'

type Ctx = { params: Promise<{ id: string }> }

function json(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(_req: Request, ctx: Ctx) {
  const { userId } = await auth()
  if (!userId) return json('Unauthorized', 401)

  const { id } = await ctx.params

  // Load design + owner (user) for email and ownership check
  const design = await prisma.design.findUnique({
    where: { id },
    include: { user: { select: { id: true, clerkUserId: true, email: true } } },
  })
  if (!design) return json('Design not found', 404)
  if (design.user.clerkUserId !== userId) return json('Forbidden', 403)

  // Only allow submit from draft
  if (design.status !== 'draft') {
    return json(
      `Only draft designs can be submitted (current: ${design.status}).`,
      400
    )
  }

  const updated = await prisma.design.update({
    where: { id },
    data: { status: 'submitted' },
    include: {
      placements: true,
      comments: { orderBy: { createdAt: 'asc' } },
      lineItems: true,
      user: { select: { email: true } },
    },
  })

  // Fire-and-forget; do not block response on email failure
  if (updated.user?.email) {
    notifyAdminOfSubmission(updated.id, updated.user.email).catch((err) =>
      console.error('[notifyAdminOfSubmission] error:', err)
    )
  }

  return NextResponse.json({ ok: true, design: updated })
}
