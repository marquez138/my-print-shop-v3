// lib/auth.ts
import 'server-only'
import { auth } from '@clerk/nextjs/server'
import { prisma } from './db'

/**
 * Returns { userId, user } for API routes.
 * - Requires a signed-in Clerk session
 * - Auto-creates User row if missing
 */
export async function requireUserAPI() {
  const { userId } = await auth()
  if (!userId) {
    return { ok: false as const, status: 401 as const, error: 'Unauthorized' }
  }

  let user = await prisma.user.findUnique({ where: { clerkUserId: userId } })
  if (!user) {
    // Best-effort creation. If email is needed, store minimal record now.
    user = await prisma.user.create({
      data: {
        clerkUserId: userId,
        email: `${userId}@example.local`, // replace later when you wire Clerk webhooks/profile fetch
        role: 'USER',
      },
    })
  }

  return { ok: true as const, userId: user.id, clerkUserId: userId, user }
}

/** Admin gate for API routes */
export async function requireAdminAPI() {
  const me = await requireUserAPI()
  if (!me.ok) return me
  if (me.user.role !== 'ADMIN') {
    return { ok: false as const, status: 403 as const, error: 'Forbidden' }
  }
  return me
}
