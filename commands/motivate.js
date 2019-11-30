const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('snekfetch');
exports.run = async (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  
	try {
        const { body } = await superagent
            .get('https://www.reddit.com/r/GetMotivated.json?sort=top&t=week')
            .query({ limit: 800 });
        const allowed = message.channel.nsfw ? body.data.children : body.data.children.filter(post => !post.data.over_18);
        if (!allowed.length) return message.channel.send(`${red} It seems we are out of fresh motivating messages!, Try again later.`);
        const randomnumber = Math.floor(Math.random() * allowed.length)
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setTitle(allowed[randomnumber].data.title)
        .setDescription("Posted by: " + allowed[randomnumber].data.author)
        .setImage(allowed[randomnumber].data.url)
        .addField("• Other info •", "Up votes: " + allowed[randomnumber].data.ups + " / Comments: " + allowed[randomnumber].data.num_comments)
        .setFooter("Motivation provided by r/GetMotivated")
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        message.channel.send(embed)
    } catch (err) {
        return console.log(err);
    }
}
   
module.exports.help = {
name: "motivate"
}  