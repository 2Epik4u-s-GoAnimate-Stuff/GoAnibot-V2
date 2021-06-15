
module.exports = {
    slash: true,
    testOnly: false, // Ensure you have test servers setup, see the below paragraph
    description: 'A simple ping pong command', // Required for slash commands
    callback: ({}) => {
      // The content to reply with must be returned from the callback function
      // This is required for slash commands exclusively
      return 'pong'
    }
}