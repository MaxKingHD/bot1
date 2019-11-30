const Discord = require("discord.js");
const db = require('quick.db');
const client = new Discord.Client();

module.exports.run = async(client, message, args) => {
  message.delete();
  
   let msge = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "message")

  let member = message.mentions.members.first() || message.member;
  const gMessage = new db.table('MESSAGES')
  let guild = await db.fetch(`guildMessages_${member.guild.id}_${member.id}`);

  let gembed = new Discord.RichEmbed()
  .setDescription(`${msge} | **${member.user.username}#${member.user.discriminator}**, in this moment you have **${guild} messages** on this server.`)
  .setColor("RANDOM")
  .setAuthor(message.guild.name, message.author.displayAvatarURL)
  
  message.channel.send(gembed);
  
}
module.exports.help = {
    name: "messages"
}