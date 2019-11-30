const Discord = require('discord.js');
var toHex = require('colornames')
const fs = require("fs");
var prefix  = "!"

module.exports.run = async (client, message) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  

const args = message.content.slice(prefix.length).split(/ +/);
const command = args.shift().toLowerCase();
if (!args[0]) return message.channel.send(`${red} **You need to type a color name to give you the hex id!**`)

    const sayMessage = args.join(" ");
   
    message.channel.send(toHex(sayMessage));
  
}

module.exports.help = {
  name: "hex"
}