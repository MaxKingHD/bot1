const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('snekfetch');
exports.run = async (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
   let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt")
   
        const { body } = await superagent
            .get('https://nekos.life/api/lewd/neko')
       
        if (!message.channel.nsfw) return message.channel.send(`${red} **Cannot send NSFW content in a SFW channel.** ${butt}`)
        const embed = new Discord.RichEmbed()
        .setImage(body.neko)
        .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed).catch(console.error);
  }
module.exports.help = {
  name: "hentai"
}