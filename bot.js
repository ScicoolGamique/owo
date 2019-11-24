const discord = require('discord.js');
const bot = new discord.Client();
const token = "NjMxOTY5MjYzNDg5NTE1NTMw.XbDKDw.YqEevmWUlpCSc2u1-odCK1nVqrc"; //O3O insert your bot token here

bot.on('ready', () => { 
	bot.user.setActivity('hugging');
console.log('hahah');
})

bot.on('message', msg =>
{
	switch(msg.content)
	{
		case 'hi':
		{
			msg.reply('OwO');
			break;
		}
		case 'you suck':
		{
			msg.reply('(╬ ಠ益ಠ)-_-');
			break;
		}
		case 'I\'m bored':
		{
			msg.reply('talk to me ( ͡° ͜ʖ ͡°)');
			break;
		}
		case 'I hate u':
		{
			msg.reply('ಥ﹏ಥ');
			break;
		}	
		default: //default message
		{
			//msg.reply('testing..');
			break;
		}
	}
})

bot.login(token);
