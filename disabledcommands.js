//ground cmd
client.on('message', message => {
	if (!message.guild) return;
  

	if (message.content.startsWith('|ground')) {

	  const user = message.mentions.users.first();

	  if (user) {

		const member = message.guild.member(user);

		if (member) {

		  message.reply(`${user.tag} is gunsis they wil go 2 dare room  `).then(() => {
			
		  }).catch(err => {
	
			message.reply('I was unable to ground the member');
			
			console.error(err);
		  });
		} else {
		  // The mentioned user isn't in this guild
		  message.reply('That user isn\'t in this guild!');
		}
	  // Otherwise, if no user was mentioned
	  } else {
		message.reply('who ar u groundin???');
	  }
	}
  });
  //end of grounded command
  // make bot say a thing
 client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return 
    if (message.content.startsWith("|say ")) { // prefix
        message.delete(1); // Supposed to delete message
        message.channel.send(message.content.slice(4, message.content.length));
    }
});
// end of say command
