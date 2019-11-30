const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
    let on = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "online")
        let member = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "member")
            let bot = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "geaz")
  
   const role = message.guild.roles.size;
   const online = (message.guild.members.filter(m => m.presence.status != 'offline').size - message.guild.members.filter(m=>m.user.bot).size)
      const embed = new Discord.RichEmbed()
            .setAuthor("• Servername " + message.guild.name, message.guild.iconURL)
            .setColor("RANDOM")
            .addField(`${member} Members`, `${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}`, true)
            .addField(`${on} Online`, `${online}`, true)
            .addField(`${bot} Bots`, message.guild.members.filter(m=>m.user.bot).size)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
      message.channel.send({embed}) 
}
 
module.exports.help = {
name: "membercount"
}  