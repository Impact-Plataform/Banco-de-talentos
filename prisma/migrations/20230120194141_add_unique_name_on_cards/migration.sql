/*
  Warnings:

  - A unique constraint covering the columns `[cardDefId]` on the table `Cards` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cards_cardDefId_key" ON "Cards"("cardDefId");
