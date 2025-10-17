// app/api/designs/[id]/submit/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { notifyAdminNewSubmission } from '@/lib/notify'

type Ctx = { params: Promise<{ id: string }> }

function jerr(msg: string, status = 400) {
  return NextResponse.json({ error: msg }, { status })
}

export async function POST(_req: Request, ctx: Ctx) {
  const { userId } = await auth()
  if (!userId) return jerr('Unauthorized', 401)

  const { id } = await ctx.params

  // Load design and ensure ownership + state
  const design = await prisma.design.findUnique({
    where: { id },
    include: { user: true, placements: true },
  })
  if (!design) return jerr('Not found', 404)
  if (design.userId !== userId) return jerr('Forbidden', 403)

  // Users can submit only from draft
  if (design.status !== 'draft') {
    return jerr(
      `Design is '${design.status}'. Only 'draft' can be submitted.`,
      400
    )
  }

  // Require at least one placement before submitting
  if (!design.placements.length) {
    return jerr(
      'Please add at least one artwork placement before submitting.',
      400
    )
  }

  // Update status → submitted
  const updated = await prisma.design.update({
    where: { id },
    data: { status: 'submitted' },
    include: { user: true },
  })

  // Fire-and-forget admin email (don’t block response if it fails)
  notifyAdminNewSubmission({
    designId: updated.id,
    productId: updated.productId,
    userEmail: updated.user?.email || undefined,
  }).catch((e) => console.error('notifyAdminNewSubmission failed:', e))

  return NextResponse.json({ ok: true, design: updated })
}
