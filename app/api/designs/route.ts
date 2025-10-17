export const runtime = 'nodejs'

import { NextResponse } from 'next/server'
import { auth } from '@clerk/nextjs/server'
import { prisma } from '@/lib/db'

/**
 * Create a new draft Design
 * Only available to authenticated users
 */
export async function POST(req: Request) {
  const { userId } = await auth()
  console.log('Creating design for Clerk userId:', userId)

  if (!userId) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Parse and validate body
  let body: {
    productId: string
    color?: string
    pricingBase: number
    pricingFees?: number
    pricingTotal?: number
  }

  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const { productId, color, pricingBase, pricingFees, pricingTotal } = body

  if (!productId || typeof pricingBase !== 'number') {
    return NextResponse.json(
      { error: 'productId and pricingBase are required' },
      { status: 400 }
    )
  }

  try {
    const design = await prisma.design.create({
      data: {
        user: {
          connectOrCreate: {
            where: { clerkUserId: userId },
            create: {
              clerkUserId: userId,
              email: `dev+${userId}@example.com`, // ensures valid record for test/dev
            },
          },
        },
        productId,
        color: color ?? null,
        pricingBase,
        pricingFees: pricingFees ?? 0,
        pricingTotal: pricingTotal ?? pricingBase,
        status: 'draft',
      },
      include: {
        placements: true,
        comments: true,
        lineItems: true,
      },
    })

    return NextResponse.json({ ok: true, design }, { status: 201 })
  } catch (err) {
    console.error('Error creating design:', err)
    return NextResponse.json(
      { error: 'Failed to create design' },
      { status: 500 }
    )
  }
}
