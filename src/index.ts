import 'dotenv/config';

import { ActivityType, Client, Collection, GatewayIntentBits } from 'discord.js';
import { registerCommands, registerEvents } from './utils/handler.js';
import { ClientInterface, CommandInterface } from './discord';
import config from './config.js';


const client: ClientInterface = Object.assign(
    new Client({
        intents: [
            GatewayIntentBits.Guilds,
            GatewayIntentBits.GuildMessages,
        ],
        partials: [],
        presence: {
            activities: [{
                name: config.activity.message,
                type: ActivityType.Custom,
            }],
        },
    }),
    {
        commands: new Collection<string, CommandInterface>(),
    },
);

registerCommands(client);
registerEvents(client);

client.login(process.env.DISCORD_TOKEN);