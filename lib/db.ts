// lib/db.ts
import { PrismaClient } from '@prisma/client'

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined
}

function ensureDatabaseUrl() {
  if (!process.env.DATABASE_URL) {
    throw new Error(
      'DATABASE_URL is missing. Add it to your .env /.env.local (with sslmode=require if needed).'
    )
  }
}

ensureDatabaseUrl()

export const prisma =
  global.prisma ??
  new PrismaClient({
    // Optional logging to debug connection issues:
    // log: ['error', 'warn'],
  })

if (process.env.NODE_ENV !== 'production') global.prisma = prisma
