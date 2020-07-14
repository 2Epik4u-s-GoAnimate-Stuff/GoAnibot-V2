const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.content.includes('importing')) {
  msg.reply('never lol just edit it in dummy');
   

} else if (msg.content.includes('<@628607192806981632>')) {
  msg.reply('Did you just fricken ping me. Thats it! you are grounded grounded grounded FOREVER.');
  
  } else if (msg.content.includes('Can 2Epiku be grounded')) {
  msg.reply('no because hes my dad and hes god ( ͡° ͜ʖ ͡°)');

  
  } else if (msg.content === 'importingg' ) {
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
      } else if (msg.content === 'uoillac' ) {
        msg.reply('washington aaaaaaaaaaaaaaaaaa')
     } else if (msg.content === 'i love raiders' ) {
        msg.reply('why doe')
    } else if (msg.content === 'MJ Online' ) {
        msg.reply('yes, but epik denies it...')
     } else if (msg.content === 'can mj be grounded' ) {
        msg.reply('how dare you want MJ to be grunses thats it you are grounded until hell freezes over now go to washington aaaaaaaaaaaa')

}
});

client.login('NjI4NjA3MTkyODA2OTgxNjMy.XwzUmA.EdKX2RQWXj3AUIvrf0HpyPzVUdU');
