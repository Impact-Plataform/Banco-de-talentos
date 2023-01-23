/*
  Warnings:

  - You are about to drop the column `name` on the `Card` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cardDefId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[collectionId]` on the table `Card` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cardDefId` to the `Card` table without a default value. This is not possible if the table is not empty.
  - The required column `id` was added to the `Card` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropIndex
DROP INDEX "Card_name_key";

-- AlterTable
ALTER TABLE "Card" DROP COLUMN "name",
ADD COLUMN     "cardDefId" TEXT NOT NULL,
ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Card_pkey" PRIMARY KEY ("id");

-- CreateIndex
CREATE UNIQUE INDEX "Card_cardDefId_key" ON "Card"("cardDefId");

-- CreateIndex
CREATE UNIQUE INDEX "Card_collectionId_key" ON "Card"("collectionId");
