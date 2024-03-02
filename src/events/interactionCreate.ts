import { Events, BaseInteraction } from 'discord.js';
import type { ClientInterface } from '../discord.types';

const type = Events.InteractionCreate;
const execute = async (interaction: BaseInteraction) => {
    try {
        if (interaction.isChatInputCommand()) {
            const client = interaction.client as ClientInterface;
            const command = client.commands.get(interaction.commandName);

            if (!command) return;
            command.execute(interaction);
        }
    } catch (err) {
        if (interaction.isRepliable()) {
            interaction.reply({ content: 'Error while executing interaction!', ephemeral: true });
        }
    }
};

export { type, execute };