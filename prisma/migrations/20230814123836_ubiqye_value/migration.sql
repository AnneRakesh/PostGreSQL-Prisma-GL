/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `EmailSubscription` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "EmailSubscription_email_key" ON "EmailSubscription"("email");
