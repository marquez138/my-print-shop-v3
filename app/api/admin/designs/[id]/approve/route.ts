// app/api/admin/designs/[id]/approve/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyUserApproved } from '@/lib/notify'

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

  let body: { note?: string } | null = null
  try {
    body = (await req.json()) as { note?: string }
  } catch {}
  const note = body?.note?.trim()

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

  const updated = await prisma.$transaction(async (tx) => {
    const d = await tx.design.update({
      where: { id },
      data: { status: 'approved' },
      include: {
        user: { select: { email: true } },
        placements: true,
        comments: { orderBy: { createdAt: 'asc' } },
        lineItems: true,
      },
    })

    if (note) {
      await tx.designComment.create({
        data: {
          designId: id,
          body: note,
          authorId: admin.id, // optional note from admin
        },
      })
    }

    return d
  })

  if (updated.user?.email) {
    notifyUserApproved(updated.user.email, updated.id).catch((err) =>
      console.error('[notifyUserApproved] error:', err)
    )
  }

  return NextResponse.json({ ok: true, design: updated })
}
