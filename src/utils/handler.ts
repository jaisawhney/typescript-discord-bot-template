import { type Client } from 'discord.js';

import { fileURLToPath } from 'node:url';
import { join, dirname } from 'node:path';
import { readdirSync } from 'node:fs';

const __dirname = dirname(fileURLToPath(import.meta.url));

export const registerEvents = async (client: Client) => {
    const eventsPath = join(__dirname, '../events');
    const files = readdirSync(eventsPath)
        .filter(file => file.endsWith('js') || file.endsWith('ts'));

    for (const file of files) {
        const event = (await import(`../events/${file}`));
        client.on(event.type, (...args) => event.execute(...args));
    }
};