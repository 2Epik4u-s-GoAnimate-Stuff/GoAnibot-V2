require('discord.js')

module.exports = {
    slash: 'both',
    testOnly: true,
    description: 'Ground your enemies (or friends)',
    minArgs: 2,
    expectedArgs: '<who> <for> <time>',
    callback: ({ message, args }) => {
        const [who, reason, time] = args



        if (message) {
            message.reply('')
        }

        return message
    },
}