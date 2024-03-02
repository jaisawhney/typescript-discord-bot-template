import { Client, Collection, SlashCommandBuilder, ChatInputCommandInteraction } from 'discord.js';

export interface CommandInterface {
    builder: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => void;
}

export interface ClientInterface extends Client {
    commands: Collection<string, CommandInterface>
}