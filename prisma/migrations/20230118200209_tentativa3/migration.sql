/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Collection` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Collection" DROP CONSTRAINT "Collection_ownerId_fkey";

-- DropIndex
DROP INDEX "Collection_ownerId_key";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "ownerId";

-- AlterTable
ALTER TABLE "Users" ADD COLUMN     "collectionId" TEXT;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE SET NULL ON UPDATE CASCADE;
