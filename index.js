const Discord = require('discord.js');
const client = new Discord.Client();
const prefix =  '||'


client.on("ready", () =>{
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
			status: "online",  //You can show online, idle....
			game: {
					name: "code",  //The message shown
					type: "LISTENING" //PLAYING: WATCHING: LISTENING: STREAMING:
			}
	});
});

//discord help command
client.on('message', message => {
	// If the message is "how to embed"
	if (message.content === 'how to embed') {
	  // We can create embeds using the MessageEmbed constructor
	  // Read more about all that you can do with the constructor
	  // over at https://discord.js.org/#/docs/main/stable/class/RichEmbed
	  const embed = new RichEmbed()
		// Set the title of the field
		.setTitle('A slick little embed')
		// Set the color of the embed
		.setColor(0xFF0000)
		// Set the main content of the embed
		.setDescription('Hello, this is a slick embed!');
	  // Send the embed to the same channel as the message
	  message.channel.send(embed);
	}
  });
  




// make bot say a thing
  client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return 
    if (message.content.startsWith("||say ")) { // prefix
        message.delete(1); // Supposed to delete message
        message.channel.send(message.content.slice(5, message.content.length));
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

	if (msg.content.includes('||epikdance')) {
		msg.reply("heres 2Epik4u dancing for no reason lol.", { files: ["./images/epikdance.gif"] });

	}
	if (msg.content.includes('||mjdance')) {
		msg.reply("heres MJ dancing for no reason lol.", { files: ["./images/mj.gif"] });

	}
	if (msg.content.includes('||hiddencake')) {
		msg.reply("You Found the hidden cake! Good job!", { files: ["./images/cake.png"] });

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
