import { PrismaClient } from '@prisma/client'
const db = new PrismaClient()

async function main() {
  const now = await db.$queryRaw`SELECT NOW()`
  console.log('DB OK, NOW():', now)
  await db.$disconnect()
}

main().catch(async (e) => {
  console.error('DB TEST ERROR:', e)
  await db.$disconnect()
  process.exit(1)
})
