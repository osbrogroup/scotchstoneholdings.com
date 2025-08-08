-- AlterTable
ALTER TABLE `blogpost` ADD COLUMN `authorAvatar` VARCHAR(191) NULL,
    MODIFY `summary` TEXT NOT NULL;
