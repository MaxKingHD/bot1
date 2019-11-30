const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`${red} **You don't have permissions.**`);
    if(!args[0]) return message.channel.send(`${red} **Use clear [amount of messages]!**`);
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${green} **Cleared ${args[0]} messages.**`).then(msg => msg.delete(1000));
    });
    }

module.exports.help = {
    name: "clear"
}