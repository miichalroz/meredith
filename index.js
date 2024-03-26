const {Client, Events, GatewayIntentBits }= require('discord.js');
require('dotenv').config()

const client = new Client({intents: GatewayIntentBits.Guilds});




client.login(process.env.TOKEN);