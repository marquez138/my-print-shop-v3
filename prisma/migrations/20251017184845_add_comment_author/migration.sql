/*
  Warnings:

  - You are about to drop the column `userId` on the `DesignComment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."DesignComment" DROP CONSTRAINT "DesignComment_userId_fkey";

-- AlterTable
ALTER TABLE "DesignComment" DROP COLUMN "userId",
ADD COLUMN     "authorId" TEXT;

-- AddForeignKey
ALTER TABLE "DesignComment" ADD CONSTRAINT "DesignComment_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
