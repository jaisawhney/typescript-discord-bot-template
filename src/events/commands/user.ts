import { SlashCommandBuilder, ChatInputCommandInteraction, resolveColor, ColorResolvable } from 'discord.js';
import { Prisma } from '@prisma/client';

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
    try {
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
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            // https://www.prisma.io/docs/orm/reference/error-reference#error-codes
            // ...
        }

        console.error(err);
        interaction.reply({
            embeds: [
                {
                    title: 'There was an error while running the command!',
                    color: resolveColor(config.messages.embeds.colors.error as ColorResolvable),
                },
            ],
            ephemeral: true,
        });
    }
};

export { builder, execute };