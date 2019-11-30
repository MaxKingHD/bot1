const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.delete();
  
   let on = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "online");
   let gz = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "refreshed");
   
if(message.author.id !== '357247203636674560') return;
         message.channel.send(`${on} **The bot was successfully refreshed!** ${gz}`).then(
        setTimeout(() => {
          eval("process.exit()")
        }, 1000))

};

exports.help = {
  name: 'refresh'
};