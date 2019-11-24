const discord = require('discord.js');
const bot = new discord.Client();
const token = "INSERT_BOT_TOKEN_HERE"; //insert bot token here
const messages =
{
//	'lower case message' : 'reply',
	'hi' : 'OwO',
	'you suck' : '(╬ ಠ益ಠ)-_-',
	'i\'m bored' : 'talk to me ( ͡° ͜ʖ ͡°)',
	'i hate u' : 'ಥ﹏ಥ',
};

bot.on('ready', () =>
{ 
	bot.user.setActivity('hugging');
	console.log('hahah');
});

bot.on("message", msg =>
{
	if (reply_msg = messages[msg.content.toLowerCase()])
	{
		msg.reply(reply_msg);
	}
});

bot.login(token);
