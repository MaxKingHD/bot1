const randomPuppy = require('random-puppy');
const request = require('snekfetch');
const fs = require("fs")
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  message.delete();
    
  let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt")
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  if (!message.channel.nsfw) return message.channel.send(`${red} **You can use this command in a NSFW Channel!** ${butt}`)

    const subreddits = [
        'NSFW_Wallpapers',
        'SexyWallpapers',
        'HighResNSFW',
        'nsfw_hd',
        'UHDnsfw'
    ]

    var sub = subreddits[Math.round(Math.random() * (subreddits.length - 1))];

    randomPuppy(sub)
            .then(url => {
                const embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setImage(url)
                    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
                message.channel.send({ embed });
        })
}

module.exports.help = {
    name: "4k"
}