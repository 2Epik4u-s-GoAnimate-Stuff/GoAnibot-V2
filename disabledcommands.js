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



// gotest dance
client.on('message', message => {
	
	if (message.content === '|gotestdance') {

	  const embed = new RichEmbed()
	  
		.setTitle('GoTest344 Dancing')
		.attachFiles(['https://2epik4u.tk/bot/gotest.gif'])
		.setDescription('nice.')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })


// cake
client.on('message', message => {

	if (message.content === '|hiddencake') {

	  const embed = new MessageEmbed()
	  
		.setTitle('You found the hidden cake!')
		.attachFiles(['https://2epik4u.tk/bot/cake.png'])
		.setDescription('nice. but its not a real cake so dont eat it!')
		// Set the color of the embed
		.setColor(0x0092b0)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })

  //epik dancing
  client.on('message', message => {

	if (message.content === '|epikdance') {

	  const embed = new MessageEmbed()
	  
		.setTitle('Here is 2Epik4u Dancing!')
		.attachFiles(['https://2epik4u.tk/bot/epikdance.gif'])
		.setDescription('What a LOSER!')
		
		// Set the color of the embed
		.setColor(0x1653C1)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })


//mj dancing angry
client.on('message', message => {

	if (message.content === '|mjdance') {

	  const embed = new MessageEmbed()
	  
		.setTitle('Woah is that MJ the spirit dancing')
		.attachFiles(['https://2epik4u.tk/bot/mj.gif'])
		.setDescription('wait... why is he mad?')
		// Set the color of the embed
		.setColor(0xFC8C06)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })



  //cyan dance
  client.on('message', message => {

	if (message.content === '|cyandance') {

	  const embed = new MessageEmbed()
	  
		.setTitle('CyanAnimate dancing very nice')
		.attachFiles(['https://2epik4u.tk/bot/cyan.gif'])
		.setDescription('cyan more like tom from eddsworld')
		// Set the color of the embed
		.setColor(0xFC8C06)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })

