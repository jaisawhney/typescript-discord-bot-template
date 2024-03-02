import 'dotenv/config';

import { Client, Collection } from 'discord.js';
import { registerCommands, registerEvents } from './utils/handler.js';
import { ClientInterface, CommandInterface } from './discord.types.js';


const client: ClientInterface = Object.assign(
    new Client({
        intents: [],
        partials: [],
    }),
    {
        commands: new Collection<string, CommandInterface>(),
    },
);

registerCommands(client);
registerEvents(client);

client.login(process.env.DISCORD_TOKEN);