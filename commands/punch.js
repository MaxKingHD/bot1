const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
  message.delete();
  
          let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let pnc = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "punch");
  
      if (message.mentions.users.size < 1) return message.channel.send(`${red} **You can't punch nobody.** `)
      let user = message.guild.member(message.mentions.users.first());
            message.channel.send(`${user} **You got a punch from ${message.author.username}!** ${pnc}`,{
                embed: {
                    image: {
                        url: "https://imgur.com/NRLXFtt.gif"
                    }
                }
            })
}
   
module.exports.help = {
name: "punch"
}