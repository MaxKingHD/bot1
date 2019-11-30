const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.delete();
  
  message.channel.sendMessage("**`¯\\_(ツ)_/¯`**");
}


exports.help = {
  name: 'idk'
}