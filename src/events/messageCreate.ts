import { Events, Message } from 'discord.js';
import { db, schema } from '../db';
import { sql } from 'drizzle-orm';

const type = Events.MessageCreate;
const once = false;
const execute = async (msg: Message) => {
    await db.insert(schema.users)
        .values({
            id: msg.author.id,
            numMessages: 1,
        })
        .onConflictDoUpdate({
            target: schema.users.id,
            set: {
                numMessages: sql`${schema.users.numMessages} + 1`,
            },
        });
};

export { type, once, execute };