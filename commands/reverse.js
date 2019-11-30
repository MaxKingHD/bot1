const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
        const text = args.join(' ')
        const converted = text.split('').reverse().join('');
        message.channel.send(`\u180E${converted}`);
}
   module.exports.help = {
name: "reverse"
}