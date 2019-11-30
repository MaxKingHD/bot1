const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
let ban = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "ban")
        let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!bUser) return message.channel.send(`${red} **Can't find user!**`);
        let bReason = args.join(" ").slice(22);
        if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send(`${red} **You don't have permissions!**`);
        if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`${red} **That person can't be banned!**`);

        let banEmbed = new Discord.RichEmbed()
        .setDescription(`${ban} •• Ban •• ${ban}`)
        .setColor("#FF0000")
        .setFooter(`Banned by ${message.author.tag}`, message.author.avatarURL)
        .addField("• Banned User •", `${bUser} with ID ${bUser.id}`)
        .addField("• Banned By •", `<@${message.author.id}> with ID ${message.author.id}`)
        .addField("• Banned In •", message.channel)
        .addField("• Time •", message.createdAt)
        .addField("• Reason •", bReason);

        let incidentchannel = message.guild.channels.find(`name`, "「🗃」incidents");
        if(!incidentchannel) return message.channel.send(`${ban} **Can't find 「🗃」incidents channel.**`);

        message.guild.member(bUser).ban(bReason);
        incidentchannel.send(banEmbed);

        return;

    }



module.exports.help = {
    name: "ban"
}