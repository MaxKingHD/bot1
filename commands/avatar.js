const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
      let user = message.mentions.users.first() || message.author
      const embed = new Discord.RichEmbed()
            .setImage(user.displayAvatarURL)
            .setColor("RANDOM")
            .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
    message.channel.send({embed})
}
   
module.exports.help = {
name: "avatar"
}
