const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
  message.delete();
  
         let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let pat = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "pat");
  
      if (message.mentions.users.size < 1) return message.channel.send(`${red} **You can't pat nobody.** `)
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a pat from ${message.author.username}!** ${pat}`,{
                embed: {
                    image: {
                        url: "https://imgur.com/PEPUHei.gif"
                    }
                }
            })
}
   
module.exports.help = {
name: "pat"
}