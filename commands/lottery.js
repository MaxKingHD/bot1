const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
    const lottery = Math.floor(Math.random() * 100) + 1;
    if (lottery === 1) return message.reply(`**Wow! You actually won! Great job!** :money_mouth: `);
    message.reply(`**Nope, sorry, you lost.** :cry:`);
}
module.exports.help = {
  name: "lottery"
}