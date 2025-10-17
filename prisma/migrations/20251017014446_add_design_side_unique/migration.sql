/*
  Warnings:

  - A unique constraint covering the columns `[designId,side]` on the table `DesignPlacement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "DesignPlacement_designId_side_key" ON "DesignPlacement"("designId", "side");
