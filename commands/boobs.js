const superagent = require("snekfetch");
const Discord = require('discord.js')

const rp = require('request-promise-native');


exports.run = async (client, message, args, level) => {
  message.delete();
    
let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt")
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  
  if (!message.channel.nsfw) return message.channel.send(`${red} **You can use this command in a NSFW Channel!** ${butt}`)


  return rp.get('http://api.oboobs.ru/boobs/0/1/random').then(JSON.parse).then(function(res)  {
    return rp.get({
        url:'http://media.oboobs.ru/' + res[0].preview,
        encoding: null
    });
}).then(function(res)   {

const lewdembed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setImage("attachment://file.png").attachFiles([{ attachment: res, name: "file.png" }])
      .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);

    message.channel.send(lewdembed);
});
}

module.exports.help = {
    name: "boobs"
}