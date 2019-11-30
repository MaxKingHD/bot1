const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
     let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
     let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified");
        
        let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!rUser) return message.channel.send(`${red} **Couldn't find user.** `);
        let reason = args.join(" ").slice(22);

        let reportEmbed = new Discord.RichEmbed()
        .setDescription(`${verified} Reports`)
        .setColor("RANDOM")
        .setFooter(`Reported by ${message.author.tag}`, message.author.avatarURL)
        .addField("• Reported User", `${rUser} with ID: ${rUser.id}`)
        .addField("• Reported By", `${message.author} with ID: ${message.author.id}`)
        .addField("• Channel", message.channel)
        .addField("• Time", message.createdAt)
        .addField("• Reason", reason);

        let reportschannel = message.guild.channels.find(`name`, "「✍」reports");
        if(!reportschannel) return message.channel.send(`${red} **Couldn't find「✍」reports channel.**`);


        message.delete().catch(O_o=>{});
        reportschannel.send(reportEmbed);


}

module.exports.help = {
  name: "report"
}