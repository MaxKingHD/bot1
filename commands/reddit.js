const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('snekfetch');
exports.run = async (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
   let butt = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "butt");
  
        const subreddit = args.join(" ") || 'random'
        const subRedCat = args.slice(1).join(" ") || 'random'
        const { body } = await superagent
            .get(`https://www.reddit.com/r/${subreddit}/${subRedCat}.json`)
       
        if (!message.channel.nsfw) return message.channel.send(`${red} **Cannot display NSFW content in a SFW channel.** ${butt}`);
        let meme;
        if (body[0]) {
          meme = body[0].data.children[Math.floor(Math.random() * body[0].data.children.length)].data;
        } else {
          meme = body.data.children[Math.floor(Math.random() * body.data.children.length)].data;
        }
        await message.channel.send(`${meme.title} submitted by ${meme.author} in ${meme.subreddit_name_prefixed}\nUpvote Ratio ${meme.upvote_ratio}\n${meme.url}`);
        const embed = new Discord.RichEmbed()
        .setImage(body.neko)
         .setFooter(`Requested By ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed);
  }
   
module.exports.help = {
name: "reddit"
}