export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyUserApproved } from '@/lib/notify'

type Ctx = { params: Promise<{ id: string }> }

function json(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

async function assertAdmin(userId?: string | null) {
  if (!userId) return false
  const me = await prisma.user.findFirst({
    where: { clerkUserId: userId },
    select: { role: true },
  })
  return me?.role === 'ADMIN'
}

export async function POST(_req: Request, ctx: Ctx) {
  const { userId } = await auth()
  if (!(await assertAdmin(userId))) return json('Forbidden', 403)

  const { id } = await ctx.params

  // Must be submitted to approve
  const design = await prisma.design.findUnique({
    where: { id },
    include: { user: { select: { email: true } } },
  })
  if (!design) return json('Design not found', 404)
  if (design.status !== 'submitted') {
    return json(
      `Only submitted designs can be approved (current: ${design.status}).`,
      400
    )
  }

  const updated = await prisma.design.update({
    where: { id },
    data: { status: 'approved' },
    include: {
      placements: true,
      comments: { orderBy: { createdAt: 'asc' } },
      lineItems: true,
      user: { select: { email: true } },
    },
  })

  if (updated.user?.email) {
    notifyUserApproved(updated.user.email, updated.id).catch((err) =>
      console.error('[notifyUserApproved] error:', err)
    )
  }

  return NextResponse.json({ ok: true, design: updated })
}
