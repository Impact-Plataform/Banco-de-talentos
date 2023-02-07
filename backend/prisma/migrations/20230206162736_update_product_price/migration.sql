/*
  Warnings:

  - You are about to drop the column `price` on the `Products` table. All the data in the column will be lost.
  - Added the required column `brlPrice` to the `Products` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Products" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "brlPrice" INTEGER NOT NULL
);
INSERT INTO "new_Products" ("category", "description", "id", "title") SELECT "category", "description", "id", "title" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE UNIQUE INDEX "Products_id_key" ON "Products"("id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
