const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
 
  
    let autogoogle = args.join('+');
    if (autogoogle.length < 1) return message.reply(`${red} **You must supply a LMGTFY.** `).catch(console.error);
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        .setDescription(`• Here you go, **${message.author.username}**: http://lmgtfy.com/?q=` + (args.join('+')))
    message.channel.send({embed})
}
   
module.exports.help = {
name: "lmgtfy"
}