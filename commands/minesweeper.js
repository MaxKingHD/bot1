const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');
const client = new Discord.Client();

// requires edited discord.js-minesweeper to work properly

exports.run = (client, message, args) =>{
  message.delete();
  
    const rows = parseInt(args[0]) <= 10 ? parseInt(args[0]) : 10;
    const columns = parseInt(args[1]) <= 10 ? parseInt(args[1]) : 10;
    const mines = parseInt(args[2]) > parseInt((rows * columns) / 4) ? parseInt((rows * columns) / 4) : parseInt(args[2]);

    const minesweeper = new Minesweeper({ rows, columns, mines }).start();
    const Embed = new Discord.RichEmbed();
  Embed.setAuthor(`• Game started by ${message.author.username}`, `${message.author.displayAvatarURL}`).setDescription(`${minesweeper}\n**Rows:** ${rows} | **Columns:** ${columns} | **Mines:** ${mines}`);    
  return message.channel.send(Embed)
  
}
    

   
module.exports.help = {
  name: "minesweeper"
}

