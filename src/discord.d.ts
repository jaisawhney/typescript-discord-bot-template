import { Client, Collection, SlashCommandBuilder, ChatInputCommandInteraction, AnySelectMenuInteraction, AutocompleteInteraction, ButtonInteraction, ModalSubmitInteraction } from 'discord.js';

export interface CommandInterface {
    builder: SlashCommandBuilder;
    execute: (interaction: ChatInputCommandInteraction) => void;
}

export interface ComponentInterface {
    type: string;
    id: string;
    execute: (interaction: ButtonInteraction | AnySelectMenuInteraction | ModalSubmitInteraction | AutocompleteInteraction) => void;
}

export interface ClientInterface extends Client {
    commands: Collection<string, CommandInterface>;
    subCommands: Collection<string, CommandInterface>;
    components: Collection<string, ComponentInterface>;
}