const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '<@353615061169995779>') {
    msg.reply('im sad bc you ping 2epik4u pls dont ping him again https://tenor.com/view/cute-cat-cry-three-sad-gif-15849691')
  } else if (msg.content === 'importing' ) {
    msg.reply('never')
} else if (msg.content === 'sign up' ) {
    msg.reply('when i learn php')
 } else if (msg.content === 'hi' ) {
    msg.reply('hi how are u doing')
  } else if (msg.content === 'patched' ) {
     msg.reply('Wrapper Online isnt patched.')
   } else if (msg.content === 'your grounded' ) {
      msg.reply('no u')
    } else if (msg.content === 'i hate raiders' ) {
       msg.reply('me too they suck they ruin all the fun')
      } else if (msg.content === 'uoilac' ) {
        msg.reply('washington aaaaaaaaaaaaaaaaaa')
     } else if (msg.content === 'i love raiders' ) {
        msg.reply('why doe')



}
});

client.login('NjI4NjA3MTkyODA2OTgxNjMy.XwzUmA.EdKX2RQWXj3AUIvrf0HpyPzVUdU');
