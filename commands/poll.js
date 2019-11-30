const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {
  message.delete();
  
          let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let ship = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "rainbowsheep");

    if (!message.member.roles.find(r => r.name === 'Staff')) return message.channel.send(`${red} **You don't have permissions!**`);

    if (!message.member.hasPermission('ADMINISTRATOR'));

    if (!args[0]) return message.channel.send(`${red} **Please use: <prefix>poll question.** `);

    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter('• React to vote •')
    .setDescription(args.join(' '))
    .setTitle(`• Poll •`)
    .setFooter(`Poll Created By ${message.author.tag}`, message.author.avatarURL)

    let msg = await message.channel.send(embed);

    await msg.react('✅');
    await msg.react('❌');

    message.delete({timeout: 1000});


}

module.exports.help = {
    name: "poll"
}