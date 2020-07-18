const { Client, RichEmbed } = require('discord.js');
// Create an instance of a Discord client
const client = new Client();
const prefix =  '|'


client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
			status: "online",  //You can show online, idle....
			game: {
					name: "|help",  //The message shown
					type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
			}
	});
});
//ground cmd
client.on('message', message => {
	// Ignore messages that aren't from a guild
	if (!message.guild) return;
  
	// If the message content starts with "!kick"
	if (message.content.startsWith('|ground')) {
	  // Assuming we mention someone in the message, this will return the user
	  // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
	  const user = message.mentions.users.first();
	  // If we have a user mentioned
	  if (user) {
		// Now we get the member from the user
		const member = message.guild.member(user);
		// If the member is in the guild
		if (member) {
		  /**
		   * Kick the member
		   * Make sure you run this on a member, not a user!
		   * There are big differences between a user and a member
		   */
		  message.reply(`${user.tag} is gunsis they wil go 2 dare room  `).then(() => {
			// We let the message author know we were able to kick the person
			
		  }).catch(err => {
			// An error happened
			// This is generally due to the bot not being able to kick the member,
			// either due to missing permissions or role hierarchy
			message.reply('I was unable to ground the member');
			// Log the error
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
  



//unground command
  client.on('message', message => {
	// Ignore messages that aren't from a guild
	if (!message.guild) return;
  
	
	if (message.content.startsWith('|unground')) {
	  // Assuming we mention someone in the message, this will return the user
	  // Read more about mentions over at https://discord.js.org/#/docs/main/stable/class/MessageMentions
	  const user = message.mentions.users.first();
	  // If we have a user mentioned
	  if (user) {
		// Now we get the member from the user
		const member = message.guild.member(user);
		// If the member is in the guild
		if (member) {
		  /**
		   * Kick the member
		   * Make sure you run this on a member, not a user!
		   * There are big differences between a user and a member
		   */
		  message.reply(`${user.tag} is ungunsis  day can go 2 chuk e cheez  `).then(() => {
			// We let the message author know we were able to kick the person
			
		  }).catch(err => {
			// An error happened
			// This is generally due to the bot not being able to kick the member,
			// either due to missing permissions or role hierarchy
			message.reply('I was unable to ground the member');
			// Log the error
			console.error(err);
		  });
		} else {
		  // The mentioned user isn't in this guild
		  message.reply('That user isn\'t in this guild!');
		}
	  // Otherwise, if no user was mentioned
	  } else {
		message.reply('You didn\'t mention the user to ground!');
	  }
	}
  });

//discord help command
client.on('message', message => {
	// If the message is "||help"
	if (message.content === '|help') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
	  const embed = new RichEmbed()
		// Set the title of the field
		.setTitle('Wrapper Online Commands')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed
		.setDescription('|mjdance       |epikdance         |hiddencake     |avatar |say [ADMIN ONLY]    |ground  |unground');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  



// Create an event listener for messages
client.on('message', message => {
	// If the message is "what is my avatar"
	if (message.content === '|avatar') {
	  // Send the user's avatar URL
	  message.reply(message.author.avatarURL);
	}
  });

// make bot say a thing
  client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return 
    if (message.content.startsWith("|say ")) { // prefix
        message.delete(1); // Supposed to delete message
        message.channel.send(message.content.slice(4, message.content.length));
    }
});

// bot autoresponds
client.on('message', msg => {

	if (msg.mentions.users.has('<628607192806981632>')) {
		msg.reply('Did you just fricken ping me. Thats it! you are grounded grounded grounded FOREVER.');
	}

	// includes responds
	if (msg.content.includes('Can 2Epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	} 
	if (msg.content.includes('can 2epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}
	if (msg.content.includes('Can 2epik4u be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}
	if (msg.content.includes('Can 2epik be grounded')) {
		msg.reply('no because hes my dad and hes god :rage:');
	}

	if (msg.content.includes('|epikdance')) {
		msg.reply("heres 2Epik4u dancing for no reason lol.", { files: ["./images/epikdance.gif"] });

	}
	if (msg.content.includes('|mjdance')) {
		msg.reply("heres MJ dancing for no reason lol.", { files: ["./images/mj.gif"] });

	}
	if (msg.content.includes('|hiddencake')) {
		msg.reply("You Found the hidden cake! Good job!", { files: ["./images/cake.png"] });

	}
	if (msg.content.includes('|cyandanc')) {
		msg.reply("CyanAnimate Dancing!", { files: ["./images/cyan.gif"] });

	}

	

	
	
	if (msg.content === 'hi' ) {
		msg.reply('hi how are u doing')
	}
	if (msg.content === 'your grounded' ) {
		msg.reply('no u')
	}
	if (msg.content === 'uoillac' ) {
		msg.reply('washington aaaaaaaaaaaaaaaaaa')
	}



	
});
// bot token login
client.login('NjI4NjA3MTkyODA2OTgxNjMy.XxKUOg.V11g5X6PCzrUNJ9rBXvWQv2CahI');
