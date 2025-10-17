export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyUserDecision } from '@/lib/notify'

type Ctx = { params: Promise<{ id: string }> }

function json(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(req: Request, ctx: Ctx) {
  const { userId } = await auth()
  if (!userId) return json('Unauthorized', 401)

  const { id: designId } = await ctx.params

  // Ensure caller is an admin
  const admin = await prisma.user.findFirst({
    where: { clerkUserId: userId, role: 'ADMIN' },
    select: { id: true, email: true },
  })
  if (!admin) return json('Forbidden', 403)

  // Optional body with comment
  let adminComment: string | undefined
  try {
    const body = (await req.json()) as { comment?: string } | null
    adminComment = body?.comment?.trim() || undefined
  } catch {
    // no body provided is fine
  }

  // Load design & owner
  const design = await prisma.design.findUnique({
    where: { id: designId },
    include: { user: { select: { id: true, email: true } } },
  })
  if (!design) return json('Design not found', 404)
  if (design.status !== 'submitted') {
    return json(
      `Only submitted designs can be rejected (current: ${design.status}).`,
      400
    )
  }

  // Update status
  await prisma.design.update({
    where: { id: designId },
    data: { status: 'rejected' },
  })

  // Persist optional admin comment
  if (adminComment) {
    await prisma.designComment.create({
      data: {
        body: adminComment,
        design: { connect: { id: designId } },
        author: { connect: { id: admin.id } },
      },
    })
  }

  // Notify user
  if (design.user?.email) {
    await notifyUserDecision({
      to: design.user.email,
      designId,
      decision: 'rejected',
      comment: adminComment ?? null,
    })
  }

  return NextResponse.json({ ok: true })
}
