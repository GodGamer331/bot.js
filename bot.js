const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity(`Hey, Wassup!`);
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`){
    message.channel.send(":ping_pong: Pong!");
  
  }
  if (cmd === `${prefix}embed`){
    var embed = new Discord.RichEmbed()
        .setTitle("Test Embed")
        .setFooter("This is footer!")
    message.channel.sendEmbed(embed)
  }
});

bot.login(process.env.token);
