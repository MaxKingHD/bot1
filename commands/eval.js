const Discord = require("discord.js");

exports.run = async (client, message, args, color, prefix) => {
  message.delete();
 
   if(message.author.id !== '357247203636674560')return;
    try {
        let codein = args.join(" ");
        let code = eval(codein);

        if (typeof code !== 'string')
            code = require('util').inspect(code, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setAuthor("• Evaluate Device •")
        .setColor('RANDOM')
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
        .addField(':inbox_tray: Input', `\`\`\`js\n${codein}\`\`\``)
        .addField(':outbox_tray: Output', `\`\`\`js\n${code}\n\`\`\``)
        message.channel.send(embed)
    } catch(e) {
        message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
    }
}

module.exports.help = {
    name: "eval"
};