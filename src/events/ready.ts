import { Events, type Client } from 'discord.js';
import chalk from 'chalk';

const type = Events.ClientReady;
const execute = async (client: Client) => {
    console.log(chalk.green(`Logged in as ${client.user!.tag}`));
};

export { type, execute };