import { ButtonInteraction } from 'discord.js';

const id = 'exampleBtn';

const execute = async (interaction: ButtonInteraction) => {
    await interaction.deferReply({ ephemeral: true });
    await interaction.client.channels.fetch(interaction.channelId);
};

export { id, execute };