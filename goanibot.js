const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const WOKCommands = require('wokcommands')

client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [config.guild],
        showWarns: false,
    })
})





// bot token login
client.login(config.token)
