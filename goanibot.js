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
// did you mean |
// Prefix (|) Website: 2epik4u.tk/goanibot Discord: 2epik4u.tk/2epik4u



// bot token login
client.login(config.token)
