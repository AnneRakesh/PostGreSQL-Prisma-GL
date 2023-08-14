/*
  Warnings:

  - You are about to drop the column `debit` on the `Transactions` table. All the data in the column will be lost.
  - You are about to drop the column `lebal` on the `Transactions` table. All the data in the column will be lost.
  - Added the required column `label` to the `Transactions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Transactions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Transactions" DROP COLUMN "debit",
DROP COLUMN "lebal",
ADD COLUMN     "label" VARCHAR(50) NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL;
