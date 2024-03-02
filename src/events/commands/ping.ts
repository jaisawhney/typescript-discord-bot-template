import { SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

const builder = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong');
    
const execute = async (interaction: ChatInputCommandInteraction) => {
    interaction.reply('Pong!');
};

export { builder, execute };