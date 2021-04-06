const { MessageEmbed } = require('discord.js')

module.exports = {
    slash: true,
    testOnly: true, // Ensure you have test servers setup, see the above section
    description: 'Ground your enemies (or friends)',
    minArgs: 2,
    expectedArgs: '<user> <for>',
    callback: ({ args }) => {
        // Destructure the name and age from the args array
        const [user, reason] = args

        // The content to reply with must be returned from the callback function
        // This is required for slash commands exclusively
        return `OH OH OH OH OH OH OH! ${user} HOW DARE YOU ${reason}. THATS IT, YOUR GROUNDED FOR LIFE. NOW GO TO YOUR ROOM RIGHT NOW!!`
    }
}