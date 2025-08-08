/*
  Warnings:

  - You are about to drop the column `content` on the `opportunity` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `opportunity` DROP COLUMN `content`,
    ADD COLUMN `description` VARCHAR(191) NULL,
    ADD COLUMN `features` VARCHAR(191) NULL,
    ADD COLUMN `link` VARCHAR(191) NULL;
