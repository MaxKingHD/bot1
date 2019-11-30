const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();



    function genCode(length, letter) {

var multiplier = '';

if (letter.indexOf('a') > -1) multiplier += 'abcdefghijklmnopqrstuvwxyz';

if (letter.indexOf('A') > -1) multiplier += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

if (letter.indexOf('0') > -1) multiplier += '0123456789';


var results = '';

 

for (var i = length; i > 0; --i) 

{

results += multiplier[Math.floor(Math.random() * multiplier.length)];

}

return results;

}


    const genEmbed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle('NITRO PREMIUM GIFT')
        .setThumbnail(client.user.displayAvatarURL)
        .addField("Your discord nitro gift !", " https:/"+"/discord.gift/" + genCode(16,'0aA') +" ")
        .addBlankField()
        .setTimestamp()
        
    message.channel.type === ("dm") + message.author.send(genEmbed);
   
}


  

module.exports.help = {
  name: "nitro"
}