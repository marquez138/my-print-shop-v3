// app/api/designs/[id]/route.ts
export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { requireUserAPI } from '@/lib/auth'

type Ctx = { params: Promise<{ id: string }> }

/**
 * GET /api/designs/:id
 */
export async function GET(_req: Request, ctx: Ctx) {
  const gate = await requireUserAPI()
  if (!gate.ok)
    return NextResponse.json({ error: gate.error }, { status: gate.status })
  const { id } = await ctx.params

  try {
    const design = await prisma.design.findUnique({
      where: { id },
      include: {
        placements: true,
        comments: { orderBy: { createdAt: 'asc' } },
        lineItems: true,
      },
    })
    if (!design || design.userId !== gate.user.id) {
      return NextResponse.json({ error: 'Not found' }, { status: 404 })
    }
    return NextResponse.json({ design })
  } catch (err) {
    if (err instanceof Error) {
      console.error('[GET /api/designs/:id]', err.message)
      return NextResponse.json({ error: err.message }, { status: 500 })
    }
    console.error('[GET /api/designs/:id]', err)
    return NextResponse.json({ error: 'Unknown error' }, { status: 500 })
  }
}
