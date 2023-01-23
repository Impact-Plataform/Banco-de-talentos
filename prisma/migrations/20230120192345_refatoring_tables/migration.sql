/*
  Warnings:

  - You are about to drop the `Card` table. If the table is not empty, all the data it contains will be lost.
  - Made the column `collectionId` on table `Users` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Card" DROP CONSTRAINT "Card_collectionId_fkey";

-- DropForeignKey
ALTER TABLE "Users" DROP CONSTRAINT "Users_collectionId_fkey";

-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "collectionId" SET NOT NULL;

-- DropTable
DROP TABLE "Card";

-- CreateTable
CREATE TABLE "Cards" (
    "collectionId" TEXT NOT NULL,
    "cardDefId" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_collectionId_key" ON "Cards"("collectionId");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
