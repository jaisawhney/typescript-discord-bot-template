import 'dotenv/config';

import { ActivityType, Client, Collection, IntentsBitField } from 'discord.js';
import { registerCommands, registerComponents, registerEvents } from './utils/handler.js';
import { ClientInterface, CommandInterface, ComponentInterface } from './discord';

import config from './config.js';

const client: ClientInterface = Object.assign(
    new Client({
        intents: [
            IntentsBitField.Flags.Guilds,
            IntentsBitField.Flags.GuildMessages,
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
        subCommands: new Collection<string, CommandInterface>(),
        components: new Collection<string, ComponentInterface>(),
    },
);

registerCommands(client);
registerEvents(client);
registerComponents(client);

client.login(process.env.DISCORD_TOKEN);
