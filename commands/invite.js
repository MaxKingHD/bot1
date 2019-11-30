const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
   let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")  
  
message.channel.send(`${verified} **Here's a invite link to invite the bot to your server, see you there!**`)
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    .setDescription(`[Invite 4 Aces Developer](https://discordapp.com/oauth2/authorize?client_id=617374911442452491&scope=bot&permissions=805314622)`);
    message.channel.send({embed})
}

module.exports.help = {
  name: "invite" 
}