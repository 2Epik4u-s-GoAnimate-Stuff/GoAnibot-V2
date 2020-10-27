const { Client, RichEmbed } = require('discord.js');
const client = new Client();
const prefix =  '|'


client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
			status: "online",  //You can show online, idle....
			game: {
					name: "Prefix (|) Website: 2epik4u.tk/goanibot Discord: 2epik4u.tk/2epik4u ",  //The message shown
					type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
			}
	});
});

client.on('message', message => {
	if (message.content === '|ragecookie') {

	  const embed = new RichEmbed()
	  
		.setTitle('this is what development looks like xdd')
		.attachFiles(['https://cdn.discordapp.com/attachments/571483118062796822/765585880005869598/Screen_Shot_2020-09-10_at_3.52.37_PM.png'])
		.setDescription('EGS DE TOTAL NOT RIP OFF')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  })


client.on('message', message => {
	if (message.content === '|futureanimate') {

	  const embed = new RichEmbed()
	  
		.setTitle('FutureAnimate Is not up yet.')
		.attachFiles(['https://img.youtube.com/vi/Y5RoHurytNw/maxresdefault.jpg'])
		.setDescription('When futureanimate does get updated i will put it here')
		.setColor(0xFF0000)
	  message.channel.send(embed);
	}
  })


client.on('message', message => {

	if (message.content === '|goanimate') {

	  const embed = new RichEmbed()
	  
		.setTitle('Legacy Video makers')
		.attachFiles(['https://img.youtube.com/vi/Y5RoHurytNw/maxresdefault.jpg'])
		.setDescription('If you are on windows, Wrapper Offline is the way to go. If you want wrapper offline heres a tutorial. https://youtu.be/Y5RoHurytNw If you are on MacOS or Linux or Chromebook Use FutureAnimate. Heres the link  http://michiruisfire.eu-4.evennode.com/html/list.html')
		.setColor(0xFF0000)
	  message.channel.send(embed);
	}
  })



client.on('message', message => {
	if (message.content === '|comedyworld') {

	  const embed = new RichEmbed()
	  
		.setTitle('Legacy Video makers')
		.attachFiles(['https://img.youtube.com/vi/Y5RoHurytNw/maxresdefault.jpg'])
		.setDescription('If you are on windows, Wrapper Offline is the way to go. If you want wrapper offline heres a tutorial. https://youtu.be/Y5RoHurytNw If you are on MacOS or Linux or Chromebook Use FutureAnimate. Heres the link  http://michiruisfire.eu-4.evennode.com/html/list.html')
		.setColor(0xFF0000)


	  message.channel.send(embed);
	}
  })

client.on('message', message => {
	
	if (message.content === '|comedyworld') {


	  const embed = new RichEmbed()
	  
		.setTitle('Legacy Video makers')
		.attachFiles(['https://img.youtube.com/vi/Y5RoHurytNw/maxresdefault.jpg'])
		.setDescription('If you are on windows, Wrapper Offline is the way to go. If you want wrapper offline heres a tutorial. https://youtu.be/Y5RoHurytNw If you are on MacOS or Linux or Chromebook Use FutureAnimate. Heres the link  http://michiruisfire.eu-4.evennode.com/html/list.html')
		
		.setColor(0xFF0000)
		

	  message.channel.send(embed);
	}
  })


// LVM command
client.on('message', message => {

	if (message.content === '|lvm') {

	  const embed = new RichEmbed()
	  
		.setTitle('Legacy Video makers')
		.attachFiles(['https://img.youtube.com/vi/Y5RoHurytNw/maxresdefault.jpg'])
		.setDescription('If you are on windows, Wrapper Offline is the way to go. If you want wrapper offline heres a tutorial. https://youtu.be/Y5RoHurytNw If you are on MacOS or Linux or Chromebook Use FutureAnimate. Heres the link  http://michiruisfire.eu-4.evennode.com/html/list.html')
		
		.setColor(0xFF0000)


	  message.channel.send(embed);
	}
  })


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

	  const embed = new RichEmbed()
	  
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

	  const embed = new RichEmbed()
	  
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

	  const embed = new RichEmbed()
	  
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

	  const embed = new RichEmbed()
	  
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
  



//unground command
  client.on('message', message => {

	if (!message.guild) return;
  
	
	if (message.content.startsWith('|unground')) {

	  const user = message.mentions.users.first();

	  if (user) {

		const member = message.guild.member(user);
		// If the member is in the guild
		if (member) {

		  message.reply(`${user.tag} is ungunsis  day can go 2 chuk e cheez  `).then(() => {
			
			
		  }).catch(err => {
	
			message.reply('srry but i cant ground him he has som hax or somethin');
			
			console.error(err);
		  });
		} else {
		  
		  message.reply('That user isn\'t in this guild!');
		}

	  } else {
		message.reply('who ar u ungrunsis');
	  }
	}
  });

//discord help command
client.on('message', message => {
	
	if (message.content === '|help') {

	  const embed = new RichEmbed()
		// Set the title of the field
		.setTitle('GoAnibot')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed
        .setDescription('Bot made by 2Epik4u fun: |mjdance       |epikdance         |hiddencake   |cyandance    |avatar |say   |ground  |unground |gotestdance');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  




client.on('message', message => {

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

	if (msg.content.includes('<@&628607192806981632>')) {
		msg.reply('the prefix is | now leave me alone');
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


	

	

	
	

	if (msg.content === 'your grounded' ) {
		msg.reply('no u')
	}
	if (msg.content === 'uoillac' ) {
		msg.reply('washington aaaaaaaaaaaaaaaaaa')
	}

	if (msg.startsWith === '|shutup' ) {
		msg.reply('no')
	}
	

});
// bot token login
client.login('ENTERTOKENHERE');
