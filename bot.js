const discord = require('discord.js');
const bot = new discord.Client();
const token = "NjMxOTY5MjYzNDg5NTE1NTMw.XbDKDw.YqEevmWUlpCSc2u1-odCK1nVqrc";
bot.on('ready', () => { 
    bot.user.setActivity('hugging');
console.log('hahah');
})

bot.on('message', msg =>{
   if( msg.content === 'hi'){
msg.reply('OwO');}
if( msg.content === 'you suck'){
    msg.reply('(╬ ಠ益ಠ)');
   }
   if( msg.content === "I'm bored"){
    msg.reply('talk to me ( ͡° ͜ʖ ͡°)');
   }
   if( msg.content === 'I hate u'){
    msg.reply('ಥ﹏ಥ');}
    
    })

bot.login(token);