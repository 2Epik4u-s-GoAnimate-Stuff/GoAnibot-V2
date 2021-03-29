const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'help!!!',
    minArgs: 0,
    expectedArgs: '1',
    callback: ({ message, args }) => {
        const embed = new MessageEmbed().setTitle('here is help').setDescription('epic test')


        if (message) {
            message.reply('', { embed })
        }

        return embed
    },
}