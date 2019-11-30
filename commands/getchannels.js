const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
  let text = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "text")
  let voice = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "voice")
    message.channel.send(`${voice} **Voice Channels: ` + `${message.guild.channels.filter(chan => chan.type === 'voice').size}**  ${text} **Text Channels:  ${message.guild.channels.filter(chan => chan.type === 'text').size}**`)
}
   
   module.exports.help = {
  name: "getchannels"
}