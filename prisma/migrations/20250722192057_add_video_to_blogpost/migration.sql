-- AlterTable
ALTER TABLE `blogpost` ADD COLUMN `video` VARCHAR(191) NULL,
    MODIFY `summary` TEXT NULL,
    MODIFY `author` VARCHAR(191) NULL,
    MODIFY `image` VARCHAR(191) NULL,
    MODIFY `tags` VARCHAR(191) NULL,
    MODIFY `content` LONGTEXT NULL,
    MODIFY `date` VARCHAR(191) NULL;
