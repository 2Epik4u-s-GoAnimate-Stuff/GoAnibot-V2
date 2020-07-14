const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
 if (msg.content.includes('importing')) {
  msg.reply('never lol just edit it in dummy');
   

} else if (msg.content.includes('Wrapper Online Bot')) {
  msg.reply('Did you just fricken ping me. Thats it! you are grounded grounded grounded FOREVER.');

  
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


}
});

client.login('NjI4NjA3MTkyODA2OTgxNjMy.XwzUmA.EdKX2RQWXj3AUIvrf0HpyPzVUdU');
