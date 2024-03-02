import { SlashCommandBuilder, ChatInputCommandInteraction, resolveColor, ColorResolvable } from 'discord.js';
import config from '../../config.js';

const builder = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Pong');

const execute = async (interaction: ChatInputCommandInteraction) => {
    interaction.reply({
        embeds: [
            {
                title: 'Pong!',
                color: resolveColor(config.messages.embeds.colors.main as ColorResolvable),
            },
        ],
        ephemeral: true,
    });
};

export { builder, execute };