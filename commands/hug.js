const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")  
   let prty = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "partyglasses") 
      if (message.mentions.users.size < 1) return message.channel.send(`${red} **You can't hug nobody.**`)
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a hug from ${message.author.username}!** ${prty}`,{
                embed: {
                    image: {
                        url: "https://imgur.com/ONVT5kt.gif"
                    }
                }
            })
}
   
module.exports.help = {
name: "hug"
}