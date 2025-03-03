import { integer, text, sqliteTable } from 'drizzle-orm/sqlite-core';
export const users = sqliteTable('users', {
    id: text('id').unique().notNull(),
    numMessages: integer('numMessages').notNull().default(0),
});