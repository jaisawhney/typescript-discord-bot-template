import { Events, BaseInteraction } from 'discord.js';
import type { ClientInterface } from '../discord';

const type = Events.InteractionCreate;
const execute = async (interaction: BaseInteraction) => {
    try {
        if (interaction.isChatInputCommand()) {
            const client = interaction.client as ClientInterface;
            const command = client.commands.get(interaction.commandName);

            if (!command) return;
            command.execute(interaction);
        } else if (interaction.isButton()) {
            const client = interaction.client as ClientInterface;
            const buttonComponent = client.components.get(interaction.customId);

            if (!buttonComponent) return;
            buttonComponent.execute(interaction);
        }
    } catch (err) {
        if (interaction.isRepliable()) {
            interaction.reply({ content: 'Error while executing interaction!', ephemeral: true });
        }
        console.error(err);
    }
};

export { type, execute };