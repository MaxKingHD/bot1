const Discord = require("discord.js");
exports.run = (client, message, args) => { 
  message.delete();
  
  if (!args[0]) {
        return message.channel.send(`https://google.com`);
    }
    message.channel.send(`http://www.google.com/search?tbm=isch&q=${args.join('+')}&pws=0`);

}

exports.help = {
  name: 'googleimg'
}