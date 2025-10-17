// app/api/admin/designs/[id]/reject/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyUserRejected } from '@/lib/notify'

function json(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

async function getAdminUserOrNull(clerkUserId?: string | null) {
  if (!clerkUserId) return null
  const u = await prisma.user.findUnique({
    where: { clerkUserId },
    select: { id: true, role: true, email: true },
  })
  if (!u || u.role !== 'ADMIN') return null
  return u
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const { userId: clerkUserId } = await auth()
  const admin = await getAdminUserOrNull(clerkUserId)
  if (!admin) return json('Forbidden', 403)

  const { id } = await ctx.params

  let body: { reason?: string } | null = null
  try {
    body = (await req.json()) as { reason?: string }
  } catch {}
  const reason = body?.reason?.trim()

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

    if (reason) {
      await tx.designComment.create({
        data: {
          designId: id,
          body: reason,
          authorId: admin.id, // ✅ now valid
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
