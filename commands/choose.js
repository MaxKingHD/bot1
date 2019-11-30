const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  const choice1 = args[0]
  const choice2 = args.slice(1).join(" ")
  if (choice2 < 1) return message.channel.send(`${red} **You don't provide a second option to choose from.**`)
  var choices = [`${choice1}`, `${choice2}`]
  message.channel.send(`🥁 **I choose ${choices[Math.floor(Math.random() * choices.length)]}!** 🥁`);
}

module.exports.help = {
name: "choose"
}