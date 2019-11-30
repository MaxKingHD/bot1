const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")  
  let goodolrub = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "goodolrub") 
      if (message.mentions.users.size < 1) return message.channel.send(`${red} **You can't kiss nobody!**`)
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a kiss from ${message.author.username}!** ${goodolrub}`,{
                embed: {
                    image: {
                        url: "https://imgur.com/SbMnp5P.gif"
                    }
                }
            })
}
   
module.exports.help = {
name: "kiss"
}