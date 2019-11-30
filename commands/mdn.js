const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('snekfetch');
exports.run = async (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")

  
    try {
        const query = args.join(" ")
        const { body } = await superagent
            .get('https://developer.mozilla.org/en-US/search.json')
            .query({
                q: query,
                locale: 'en-US',
                highlight: false
            });
        if (!body.documents.length) return message.channel.send('Could not find any results.');
        const data = body.documents[0];
        const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
            .setAuthor('• Mozilla Developer Network •', 'https://i.imgur.com/GRFjm01.png', 'https://developer.mozilla.org/')
            .setURL(data.url)
            .setTitle(data.title)
            .setDescription(data.excerpt);
        return message.channel.send(embed);
    } catch (err) {
        return message.channel.send(`${red} **An error occurred: **\`${err.message}\`**. Try again later!**`);
    }
}
module.exports.help = {
name: "mdn"
}