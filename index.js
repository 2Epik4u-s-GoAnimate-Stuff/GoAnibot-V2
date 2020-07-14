const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setPresence({
        status: "online",  //You can show online, idle....
        game: {
            name: "Wrapper Online",  //The message shown
            type: "PLAYING" //PLAYING: WATCHING: LISTENING: STREAMING:
        }
    });
 });

   
  client.on('message', message => {
   if (message.content.startsWith("||say ")) {
      message.delete(1); //Supposed to delete message
      message.channel.send(message.content.slice(5, message.content.length));
   }
});
client.on('message', msg => {
 if (msg.content.includes('importing')) {
  msg.reply('never lol just edit it in dummy');
     

    


       
       } else if (msg.content.includes('upload a movie')) {
  msg.reply('yep, we ate the upload a movie button');
  
  } else if (msg.content.includes('Can 2Epik4u be grounded')) {
  msg.reply('no because hes my dad and hes god :rage:');
     } else if (msg.content.includes('can 2epik4u be grounded')) {
  msg.reply('no because hes my dad and hes god :rage:');
        } else if (msg.content.includes('Can 2epik4u be grounded')) {
  msg.reply('no because hes my dad and hes god :rage:');
           } else if (msg.content.includes('Can 2epik be grounded')) {
  msg.reply('no because hes my dad and hes god :rage:');
               } else if (msg.content.includes('access to Wrapper Online')) {
  msg.reply('If you cant get access to Wrapper Online then 2Epik4u changed the link. The link is always in #🕸💻website But you need level 3 to access Website channel');
                   } else if (msg.content.includes('Wrapper Online is patched')) {
  msg.reply('If you cant get access to Wrapper Online then 2Epik4u changed the link. The link is always in #🕸💻website But you need level 3 to access Website channel');
                       } else if (msg.content.includes('stopleakingthislinkwaaaaaaaaaaaaa.eu-4.evennode.com')) {
                    msg.delete(1); //Supposed to delete message
                       msg.reply('Please dont expose the links or else it will get raided again')   


  
  } else if (msg.content === 'importingg' ) {
    msg.reply('never')
} else if (msg.content === 'sign up' ) {
    msg.reply('when i learn php')
 } else if (msg.content === 'hi' ) {
    msg.reply('hi how are u doing')
 
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
