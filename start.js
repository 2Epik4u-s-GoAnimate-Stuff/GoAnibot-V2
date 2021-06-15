const DiscordJS = require('discord.js')
const WOKCommands = require('wokcommands')
const config = require('./config.json');

const guildId = '733892766957961306'
const client = new DiscordJS.Client()

client.on('ready', () => {
    new WOKCommands(client, {
        commandsDir: 'commands',
        testServers: [guildId],
        showWarns: false,
    })
})


// bot token login
client.login(config.token)