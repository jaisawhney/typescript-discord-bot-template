import { Client } from 'discord.js';
import { registerEvents } from './utils/handler.js';
import config from './config.json' assert { type: 'json' };

const client = new Client({
	intents: [

	],
	partials: [

	],
});

registerEvents(client);

client.login(config.token);
