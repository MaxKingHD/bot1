const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
  message.delete();
  
         let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let ship = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "rainbowsheep");
  
      if (message.mentions.users.size < 1) return message.channel.send(`${red} **You can't poke nobody.** `)
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a poke from ${message.author.username}!** ${ship}`,{
                embed: {
                    image: {
                        url: "https://imgur.com/ZEPaegm.gif"
                    }
                }
            })
}
   
module.exports.help = {
name: "poke"
}