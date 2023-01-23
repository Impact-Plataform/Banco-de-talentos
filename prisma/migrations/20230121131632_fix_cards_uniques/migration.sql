-- DropIndex
DROP INDEX "Cards_cardDefId_key";

-- DropIndex
DROP INDEX "Cards_collectionId_key";

-- AlterTable
ALTER TABLE "Cards" ADD CONSTRAINT "Cards_pkey" PRIMARY KEY ("cardDefId");
