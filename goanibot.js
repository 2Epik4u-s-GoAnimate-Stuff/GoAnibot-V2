const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');



client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setActivity(config.status), { type: 'PLAYING' }
})

// working on banned command
// client.on('message', message => {
//	if (message.author.id) === banned.banned 

// did you mean |ground
// Prefix (|) Website: 2epik4u.tk/goanibot Discord: 2epik4u.tk/2epik4u
client.on('message', message => {
	
	   
	if (message.content === '|ragecookie') { 
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");

		const GoEmbed = new Discord.MessageEmbed()
	  
		.setTitle('this is what development looks like xdd')
		.attachFiles(['https://cdn.discordapp.com/attachments/571483118062796822/765585880005869598/Screen_Shot_2020-09-10_at_3.52.37_PM.png'])
		.setDescription('EGS DE TOTAL NOT RIP OFF')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed

	  // Send the embed to the same channel as the message
	  
	  message.channel.send(GoEmbed);
	}
  })





  // gotest dance
  client.on('message', message => {
	  
	  
	  if (message.content === '|gotestdance') {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
  
		const GoEmbed = new Discord.MessageEmbed()
		
		  .setTitle('GoTest344 Dancing')
		  .attachFiles(['https://cdn.discordapp.com/attachments/740797420744474734/747367509509799946/gotest.gif'])
		  .setDescription('nice.')
		  // Set the color of the embed
		  .setColor(0xFF0000)
		  // Set the main content of the embed
  
		// Send the embed to the same channel as the message
		message.channel.send(GoEmbed);
	  }
	})
  
  
  // cake
  client.on('message', message => {
	  
	if (message.content === '|hiddencake') {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
  
		const GoEmbed = new Discord.MessageEmbed()
		
		  .setTitle('You found the hidden cake!')
		  .attachFiles(['https://cdn.discordapp.com/attachments/740797420744474734/747365229737934928/cake.png'])
		  .setDescription('nice. but its not a real cake so dont eat it!')
		  // Set the color of the embed
		  .setColor(0x0092b0)
		  // Set the main content of the embed
  
		// Send the embed to the same channel as the message
		message.channel.send(GoEmbed);
	  }
	})
  
	//epik dancing
	client.on('message', message => {
		
	 if (message.content === '|epikdance') {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
  
		const GoEmbed = new Discord.MessageEmbed()
		
		  .setTitle('Here is 2Epik4u Dancing!')
		  .attachFiles(['https://cdn.discordapp.com/attachments/740797420744474734/746628859784331304/epikdance.gif'])
		  .setDescription('What a LOSER!')
		  
		  // Set the color of the embed
		  .setColor(0x1653C1)
		  // Set the main content of the embed
  
		// Send the embed to the same channel as the message
		message.channel.send(GoEmbed);
	  }
	})
	client.on('message', message => {

		if (message.content === '|lemondance') {
			if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
			const GoEmbed = new Discord.MessageEmbed()
		  
			.setTitle('Cushion Poggers Dancing!!!!')
			.attachFiles(['https://cdn.discordapp.com/attachments/736381316039180350/783769510255001620/lemondance.gif'])
			.setDescription('oh no hes not poggers')
			
			// Set the color of the embed
			.setColor(0xFE0000)
			// Set the main content of the embed
	
		  // Send the embed to the same channel as the message
		  message.channel.send(GoEmbed);
		}
	  })
  
  
  //mj dancing angry
  client.on('message', message => {
	  if (message.content === '|mjdance') {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
		const GoEmbed = new Discord.MessageEmbed()
		
		  .setTitle('Woah is that MJ the spirit dancing')
		  .attachFiles(['https://cdn.discordapp.com/attachments/723742491433500782/814524663597498368/60fpsmj-4x-RIFE.gif'])
		  .setDescription('how does he dance so smooth 😳😳')
		  // Set the color of the embed
		  .setColor(0xFC8C06)
		  // Set the main content of the embed
  
		// Send the embed to the same channel as the message
		message.channel.send(GoEmbed);
	  }
	})
  
  
  
	//cyan dance
	client.on('message', message => {
	  
  
	  if (message.content === '|cyandance') {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
  
		const GoEmbed = new Discord.MessageEmbed()
		
		  .setTitle('CyanAnimate dancing very nice')
		  .attachFiles(['https://cdn.discordapp.com/attachments/740797420744474734/746522631926448168/cyan.gif'])
		  .setDescription('cyan more like tom from eddsworld')
		  // Set the color of the embed
		  .setColor(0xFC8C06)
		  // Set the main content of the embed
  
		// Send the embed to the same channel as the message
		message.channel.send(GoEmbed);
	  }
	})
  
  




client.on('message', message => {
	
	if (message.content.startsWith('|ground')) {
		if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
		if (message.author.bot) return;
		  
	  const user = message.mentions.users.first();
	  if (user) {
		const member = message.guild.member(user);
		
		if (member) {

		  message.channel.send(`${user.tag} is grounded grounded grounded grounded grounded for infinity years. Now ${user.tag} Go to your room right now! `).then(() => {

			
		  }).catch(err => {

			message.reply('i cant ground him');

			console.error(err);
		  });
		} else {
		
		  message.reply('That user isn\'t in this guild!');
		}
	
	  } else {
		message.reply('mention who you are grounding you cant ground nobody');
	  }
	}
  });
  

  client.on('message', message => {
	

	if (message.content.startsWith('|unground')) {
	if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
		
	const user = message.mentions.users.first();
	if (user) {
	  const member = message.guild.member(user);
	  
	  if (member) {

		message.channel.send(`${user.tag} is ungunsis pog they wil go 2 dare room  `).then(() => {

		  
		}).catch(err => {

		  message.reply('I was unable to ground the member');

		  console.error(err);
		});
	  } else {
	  
		message.reply('That user isn\'t in this guild!');
	  }
  
	} else {
	  message.reply('mention who you are ungrounding you cant ground nobody');
	}
  }
});







//unground command

//discord help command
client.on('message', message => {
	if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
	
	if (message.content === '|help') {

		const GoEmbed = new Discord.MessageEmbed()
		// Set the title of the field
		.setTitle('GoAnibot V2')
		// Set the color of the embed
		.setColor('RANDOM')
		// Set the main content of the embed
		.setURL('https://discord.gg/PGHtMp7')
		.setAuthor('GoAnibot', 'https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png', 'https://discord.com/oauth2/authorize?client_id=628607192806981632&scope=bot&permissions=60416')
		.setDescription('Welcome to GoAnibot')
		.setThumbnail('https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png')
		.addFields(
			{ name: '|epikdance', value: 'Makes 2Epik4u Dance' },
			{ name: '|mjdance', value: 'Shows MJ Dancing', inline: true },
			{ name: '|hiddencake', value: 'Gives you a free hidden cake!', inline: true },
		)
		.addField('|gotestdance', 'GoTest dancing', true)
		.setImage('https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png')
		.setTimestamp()
		.setFooter('do |help2 for second page of help', 'https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png');
	  // Send the embed to the same channel as the message
	  message.channel.send(GoEmbed);

	}
  });
  
  client.on('message', message => {
	if(message.author.id === "569341656449548290")  return message.reply("You are banned from using GoAnibot.");
	
	if (message.content === '|help2') {

		const GoEmbed = new Discord.MessageEmbed()
		// Set the title of the field
		.setTitle('GoAnibot V2')
		// Set the color of the embed
		.setColor('RANDOM')
		// Set the main content of the embed
		.setURL('https://discord.gg/PGHtMp7')
		.setAuthor('GoAnibot', 'https://cdn.discordapp.com/attachments/783855479528882236/790600489820880967/goanibot_v2.png', 'https://discord.com/oauth2/authorize?client_id=628607192806981632&scope=bot&permissions=60416')
		.setDescription('Welcome to GoAnibot')

		.addFields(
			{ name: '|lemondance', value: 'dancing lemon O_O' },
			{ name: '|ground', value: 'Ground people', inline: true },
			{ name: '|hiddencake', value: 'Gives you a free hidden cake!', inline: true },
		)
		.addField('|gotestdance', 'GoTest dancing', true)

		.setTimestamp()
	
	  // Send the embed to the same channel as the message
	  message.channel.send(GoEmbed);

	}
  });




	 
// make bot say a thing

// bot token login
client.login(config.token)
