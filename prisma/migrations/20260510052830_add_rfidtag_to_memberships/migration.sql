/*
  Warnings:

  - A unique constraint covering the columns `[rfidTag]` on the table `memberships` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "memberships"
    ADD COLUMN "rfidTag" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "memberships_rfidTag_key" ON "memberships" ("rfidTag");
