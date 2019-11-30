const Discord = require('discord.js');
let days = 0;
let week = 0;

exports.run = (client, message, args) =>{
  message.delete();
  
    let uptime = ``;
    let totalSeconds = (client.uptime / 1000);
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);

    if(hours > 23){
        days = days + 1;
        hours = 0;
    }

    if(days == 7){
        days = 0;
        week = week + 1;
    }

    if(week > 0){
        uptime += `${week} week, `;
    }

    if(minutes > 60){
        minutes = 0;
    }

    uptime += `${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`;

    let serverembed = new Discord.RichEmbed()
        .setColor(`RANDOM`)
        .addField(`Mari`, `[Click here](https://i.gyazo.com/7987f0a8f49cc7158a5cb830b1f6e6a4.png)`, true)
        .setFooter(`Uptime: ${uptime}`)
        .setThumbnail(
            "https://i.imgur.com/DyFy5Rs.png"
          )
         .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(serverembed);    

}

module.exports.help = {
  name: "mari" 
}