const Discord = require("discord.js");
const moment = require("moment")

module.exports.run = async (client, message, args) => {
  message.delete();

  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  
if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${red} **You don't have permissions!**`);
let channel = message.guild.channels.find(`name`, "「🔰」chat_eng")
  
const embed = new Discord.RichEmbed()
  .setTitle(`**• Announcement •**`)
  .setDescription(args.join(" "))
  .setColor("#00FFFF")
  .setFooter(`Announced By: ${message.author.tag} | At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`)

channel.send(embed)

}

module.exports.help = {
  name: "announce"
}