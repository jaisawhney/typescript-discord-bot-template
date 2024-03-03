import { Events, Message } from 'discord.js';
import prisma from '../lib/prisma.js';

const type = Events.MessageCreate;
const once = false;
const execute = async (msg: Message) => {
    await prisma.user.upsert({
        where: {
            id: msg.author.id,
        },
        update: {
            numMessages: {
                increment: 1,
            },
        },
        create: {
            id: msg.author.id,
            numMessages: 1,
        },
    });
};

export { type, once, execute };