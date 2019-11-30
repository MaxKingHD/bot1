const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  const word = args.join(" ")
  if (word < 1) return message.channel.send(`${red} **Must provide text to embed.**`)
  const embed = new Discord.RichEmbed()
    .setDescription(word)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    .setColor("RANDOM");
  message.channel.send({embed});
}
   
module.exports.help = {
  name: "embed"
}