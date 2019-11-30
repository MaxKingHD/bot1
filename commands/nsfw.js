const discord = require('discord.js');
const request = require('request');
const subs = ['gonewild','RealGirls','Ass','Asshole','AssOnTheGlass','SpreadEm','Booty','GirlsInYogaPants','GirlsInLeggings','CollegeSluts','CollegeNSFW','FuckYeahDrunkSluts','CumSluts']
module.exports.run = async (client, message, args) => {
  message.delete();
  
     let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
      let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt")
  
    var sub = subs[Math.floor(Math.random() * subs.length)];
    console.log(sub)

    if (message.channel.nsfw === true) {

        request(`https://reddit.com/r/${sub}/random.json`, function (error, response, body) {
            body = JSON.parse(body)
            var data = body[0]['data']['children'][0]['data']
            var embed = new discord.RichEmbed()
            
            if(data['url'].match('.jpg') || data['url'].match('.png')) {
                embed.setColor('RANDOM')
                embed.setTitle(`r/${sub}`)
                embed.setURL(`https://reddit.com${data['permalink']}`)
                embed.setFooter(`Photo by ${data['author']} 😉`)
                embed.setImage(data['url'])
                embed.setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
                message.channel.send(embed);
            } else if(data['url'].match('gfycat')) {
                console.log('shmeet ')
                embed.setColor('RANDOM')
                embed.setTitle(`r/${sub}`)
                embed.setURL(`https://reddit.com${data['permalink']}`)
                embed.setFooter(`Photo by ${data['author']} 😉`)
                embed.setImage(data['url']+'.gif')
                embed.setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
                message.channel.send(embed);
            }
        });
    } else {
        message.channel.send(`${red} **Must be in a NSFW channel!** ${butt}`)
    }
}


exports.help = {
  name: 'nsfw'
}