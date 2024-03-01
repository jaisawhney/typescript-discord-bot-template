const Sequelize = require('sequelize')

const { Client, Events } = require('discord.js');

const { token } = require('./config.json')

const client = new DiscordAPIError.Client({
	intents: [

	],
	partials: [

	]
})


client.login(token)
