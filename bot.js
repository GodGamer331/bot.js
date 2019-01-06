const Discord = require("discord.js");
const bot = new Discord.Client({disableEveryone: true});

bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
  
  bot.user.setActivity("To my creator JustNela#666", {type: "LISTENING"});
});

bot.on("message", async message => {

  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let prefix = '!';
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let a = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let b = args.join(" ").slice(22);
  
  if (cmd === `${prefix}ping`){
    message.channel.send(":ping_pong: Pong!");
  
  }
  if (!a) return message.channel.send("Please specify a user!")
  if (cmd === `${prefix}report`){
    var embed = new Discord.RichEmbed()
    .setTitle("New Report!")
    .setColor(0xFBC02D)
    .setFooter("This is a Report :D")
    .addField("User Reported:", `${a}`)
    .addField("Reported by:", `${message.author}`)
    .addField("Reason:", `${b}`);
  }
  if (cmd === `${prefix}help`){
    var embed = new Discord.RichEmbed()
        .setTitle("Help commands!")
        .addField("!ping", "Bot will reply with Pong!")
        .setFooter("Made by JustNela#6666")
        .setColor(0x66BB6A)
        .setThumbnail(message.author.avatarURL)
    message.channel.sendEmbed(embed)
  }
});

bot.login(process.env.token);
