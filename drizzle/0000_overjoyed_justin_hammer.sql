CREATE TABLE `users` (
	`id` text NOT NULL,
	`numMessages` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_id_unique` ON `users` (`id`);