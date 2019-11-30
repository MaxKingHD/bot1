const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = async (client, message, args) => {
  message.delete();
   
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");
  let dice = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "dice");

  
        const value = parseInt(args.join(" "));
        if (isNaN(value)) return message.channel.send(`${red} **Not a valid number to roll.**`)
        if (!isFinite(value)) return message.channel.send(`${red} **Can not roll infinite.**`)
        isFinite
        const roll = Math.floor(Math.random() * value) + 1;
        const embed = new Discord.RichEmbed()
        .addField(`${dice} DICE ROLLED ${dice}`, roll)
        .setColor("RANDOM")
        .setFooter(`Rolled By ${message.author.tag}`, message.author.avatarURL)
        message.channel.send({embed})
}

module.exports.help = {
name: "roll"
}