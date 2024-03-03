import { SlashCommandBuilder, ChatInputCommandInteraction, resolveColor, ColorResolvable } from 'discord.js';
import config from '../../config.js';
import prisma from '../../lib/prisma.js';

const builder = new SlashCommandBuilder()
    .setName('user')
    .setDescription('Displays user info')
    .addUserOption(opt =>
        opt.setName('user')
            .setDescription('The user to view')
            .setRequired(true),
    );

const execute = async (interaction: ChatInputCommandInteraction) => {
    const user = interaction.options.getUser('user')!;
    const guildMember = await interaction.guild!.members.fetch(user.id)!;
    const userData = await prisma.user.findUnique({
        where: {
            id: user!.id,
        },
    });

    interaction.reply({
        embeds: [
            {
                title: `User info for ${user?.tag}:`,
                color: resolveColor(config.messages.embeds.colors.main as ColorResolvable),
                fields: [
                    {
                        name: 'User ID',
                        value: user.id,
                    },
                    {
                        name: 'Joined on',
                        value: guildMember.joinedAt!.toLocaleDateString('en-US'),
                        inline: true,
                    },
                    {
                        name: '# of Messages',
                        value: `${userData?.numMessages || 0}`,
                        inline: true,
                    },
                ],
                thumbnail: {
                    url: user.displayAvatarURL(),
                },
            },
        ],
        ephemeral: true,
    });
};

export { builder, execute };