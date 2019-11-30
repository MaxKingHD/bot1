const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
 
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt")
  if (!message.channel.nsfw) return message.channel.send(`${red} **You can use this command in a NSFW Channel!** ${butt}`)
      var coinflip = ['**Heads!** https://i.imgur.com/2lydFwI.png','**Tails!** https://i.imgur.com/fF5mkAv.png'];
      message.channel.send(coinflip[Math.floor(Math.random () * coinflip.length)]);
}
   
module.exports.help = {
name: "nsfwcoin"
}