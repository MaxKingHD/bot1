const Discord = require("discord.js");
const moment = require("moment");

module.exports.run = async (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${red} **You don't have permissions!**`);
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  let nickname = args.join(" ").slice(22);
  
  user.setNickname(nickname);
  
  const embed = new Discord.RichEmbed()
  .setTitle("Nickname succesfully given.")
  .setColor("RANDOM")
  .setDescription(`Succesfully changed the nickname of ${user}.`)
  .setFooter(`At: ${moment().format("dddd, MMMM Do YYYY, h:mm A", Date.now)}`);
  
  message.channel.send(embed).then(m => m.delete(5000));
}

module.exports.help = {
  name: "nick"
}