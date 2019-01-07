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
  let logs = message.guild.channels.find(`name`, `logs`);
  let mods = message.guild.roles.find("name", "Moderator");
  
  if (cmd === `${prefix}ping`){
    message.channel.send(":ping_pong: Pong!");
  
  return;
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
  if (!logs) return message.channel.send("Please make logs channel or add permissions to logs channel for our bot!");
  logs.send(embed);
  
  return;
  }
  
  if (!a) return message.channel.send("Please specify a user!")
  if (cmd === `${prefix}warn`){
    if(message.member.roles.has(mods.id)) {
      
    var embed = new Discord.RichEmbed()
    .setTitle("New Warning!")
    .setColor(0xFBC02D)
    .setFooter("Warning")
    .addField("User Warned:", `${a}`)
    .addField("Moderatoe:", `${message.author}`)
    .timestamp(date)
    .addField("Reason:", `${b}`);
  if (!logs) return message.channel.send("Please make logs channel or add permissions to logs channel for our bot!");
  logs.send(embed)
  message.channel.send(":ok_hand:");
  
    } else {
      message.reply("You are not Moderator!");
    
  return;
    }
  }
  
   if (cmd === `${prefix}help`){
    var embed = new Discord.RichEmbed()
        .setTitle("Help commands!")
        .addField("!ping", "Bot will reply with Pong!")
        .addField("!report", "Reports a user!")
        .addField("!warn", "Warns a user!")
        .setFooter("Made by JustNela#6666")
        .setColor(0x66BB6A)
        .setThumbnail(message.author.avatarURL)
        
    message.channel.sendEmbed(embed)
    return;
  }
});

bot.login(process.env.token);
