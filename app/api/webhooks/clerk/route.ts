import { Webhook, type WebhookRequiredHeaders } from 'svix'
import { headers } from 'next/headers'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export const runtime = 'nodejs'

type ClerkWebhookEvent = {
  type: string
  data: unknown
}

type ClerkUserPayload = {
  id: string
  first_name?: string | null
  last_name?: string | null
  email_addresses?: { email_address: string }[]
}

export async function POST(req: Request) {
  const payload = await req.text()
  const h = await headers()
  const secret = process.env.CLERK_WEBHOOK_SECRET
  if (!secret)
    return new NextResponse('Missing CLERK_WEBHOOK_SECRET', { status: 500 })

  const wh = new Webhook(secret)

  let evt: ClerkWebhookEvent
  try {
    evt = wh.verify(payload, {
      'svix-id': h.get('svix-id')!,
      'svix-timestamp': h.get('svix-timestamp')!,
      'svix-signature': h.get('svix-signature')!,
    } as WebhookRequiredHeaders) as ClerkWebhookEvent
  } catch (err) {
    console.error('❌ Webhook verification failed', err)
    return new NextResponse('Invalid signature', { status: 400 })
  }

  const { type, data } = evt

  if (type === 'user.created' || type === 'user.updated') {
    const u = data as ClerkUserPayload

    // Normalize possible nulls → undefined to satisfy Prisma types
    const email = u.email_addresses?.[0]?.email_address || undefined
    const name =
      `${u.first_name ?? ''} ${u.last_name ?? ''}`.trim() || undefined

    try {
      await prisma.user.upsert({
        where: { clerkUserId: u.id },
        update: { email, name },
        create: {
          clerkUserId: u.id,
          email: email ?? 'unknown@example.com',
          name,
        },
      })
      console.log(`✅ Synced Clerk user → Prisma: ${u.id} (${type})`)
    } catch (err) {
      console.error('❌ Failed to sync user', err)
      return NextResponse.json(
        { error: 'Failed to sync user' },
        { status: 500 }
      )
    }
  }

  return new NextResponse('ok', { status: 200 })
}
