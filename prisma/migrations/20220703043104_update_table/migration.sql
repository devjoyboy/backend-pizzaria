/*
  Warnings:

  - Added the required column `qr_code` to the `tables` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tables" ADD COLUMN     "qr_code" TEXT NOT NULL,
ADD COLUMN     "status" BOOLEAN NOT NULL DEFAULT false;
