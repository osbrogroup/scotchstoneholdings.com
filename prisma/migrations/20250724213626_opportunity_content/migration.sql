/*
  Warnings:

  - You are about to drop the column `description` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `features` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `link` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `opportunity` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `opportunity` table. All the data in the column will be lost.
  - Added the required column `content` to the `Opportunity` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `opportunity` DROP COLUMN `description`,
    DROP COLUMN `features`,
    DROP COLUMN `image`,
    DROP COLUMN `link`,
    DROP COLUMN `location`,
    DROP COLUMN `status`,
    DROP COLUMN `title`,
    DROP COLUMN `type`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
