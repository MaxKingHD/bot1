const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
        let bicon = client.user.displayAvatarURL;
        let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField('• Bot Developer •','Cristyle#5765', true)
        .setThumbnail(bicon)
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        .addField("• Bot Name •", client.user.username, true)
        .addField("• Created On •", client.user.createdAt);
        

        return message.channel.send(botembed);
    }
    


    module.exports.help = {
        name: "botinfo"
    }