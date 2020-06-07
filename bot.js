const discord = require("discord.js");
const bot = new discord.Client();
const token = "token";
const messages =
{
	"hi" : "OwO",
	"you suck" : "(╬ ಠ益ಠ)-_-",
	"i'm bored" : "talk to me ( ͡° ͜ʖ ͡°)",
	"i hate u" : "ಥ﹏ಥ",
	"meow" : ":heart_eyes_cat:",
};

bot.on("guildMemberAdd", member =>
{
	const channel = member.guild.channels.get("719176116123992075");
	if (!channel)
	{
		return;
	}
	channel.send(`${member} has entered our clique.`);
});

bot.on("ready", () =>
{
	bot.user.setActivity("hugging");
	console.log("hahah");
});

bot.on("message", msg =>
{
	if (reply_msg = messages[msg.content.toLowerCase()])
	{
		msg.reply(reply_msg);
	}
});

bot.login(token);
