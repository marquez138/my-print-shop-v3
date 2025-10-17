// app/api/designs/[id]/placements/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'
import { PRINT_AREAS } from '@/config/print-areas'

type Side = 'front' | 'back' | 'sleeve'

type PlacementBody = {
  side: Side
  areaId: string
  assetId: string
  url: string
}

type Ctx = { params: Promise<{ id: string }> }

function jsonError(message: string, status = 400) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(req: Request, ctx: Ctx) {
  const { userId } = await auth()
  if (!userId) return jsonError('Unauthorized', 401)

  const { id: designId } = await ctx.params

  let body: PlacementBody
  try {
    body = (await req.json()) as PlacementBody
  } catch {
    return jsonError('Invalid JSON body', 400)
  }

  const { side, areaId, assetId, url } = body
  if (!side || !areaId || !assetId || !url) {
    return jsonError('Missing required fields: side, areaId, assetId, url', 400)
  }

  // Validate area exists and belongs to the same side
  const area = PRINT_AREAS.find((a) => a.id === areaId)
  if (!area) return jsonError(`Unknown areaId "${areaId}"`, 400)
  if (area.side !== side) {
    return jsonError(
      `areaId "${areaId}" belongs to side "${area.side}", not "${side}"`,
      400
    )
  }

  // Verify design ownership + editability
  const design = await prisma.design.findUnique({
    where: { id: designId },
    select: { id: true, userId: true, status: true },
  })
  if (!design) return jsonError('Design not found', 404)
  if (design.userId !== userId) return jsonError('Forbidden', 403)
  if (design.status !== 'draft') {
    return jsonError(
      `Design is not editable in status "${design.status}". Only "draft" designs can be modified.`,
      400
    )
  }

  // Enforce one-per-side: remove existing placement for this side, then create
  await prisma.$transaction(async (tx) => {
    await tx.designPlacement.deleteMany({ where: { designId, side } })
    await tx.designPlacement.create({
      data: { designId, side, areaId, assetId, url },
    })
  })

  // Return updated design snapshot
  const updated = await prisma.design.findUnique({
    where: { id: designId },
    include: {
      placements: true,
      comments: { orderBy: { createdAt: 'asc' } },
      lineItems: true,
    },
  })

  return NextResponse.json({ ok: true, design: updated })
}
