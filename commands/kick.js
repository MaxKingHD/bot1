const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")  
  
        let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kUser) return message.channel.send(`${red} **Can't find user!**`);
        let kReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`${red} **You do not have permissions!**`);
        if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${red} **That person can't be kicked!** `);

        let kickEmbed = new Discord.RichEmbed()
        .setDescription(`${green} •• Kick •• ${green}`)
        .setColor("#00FFFF")
        .setFooter(`Kicked by ${message.author.tag}`, message.author.avatarURL)
        .addField("• Kicked User •", `${kUser} with ID ${kUser.id}`)
        .addField("• Kicked By •", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("• Kicked In •", message.channel)
        .addField("• Time •", message.createdAt)
        .addField("• Reason •", kReason);

        let kickChannel = message.guild.channels.find(`name`, "「🗃」incidents");
        if(!kickChannel) return message.channel.send(`${red} **Can't find 「🗃」incidents channel.** `);

        message.guild.member(kUser).kick(kReason);
        kickChannel.send(kickEmbed);

        return;
    }
    


    module.exports.help = {
        name: "kick"
    }