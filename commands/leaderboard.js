const Discord = require('discord.js');
const arraySort = require('array-sort');
const table = require('table');
const client = new Discord.Client();

exports.run = async (client, message, args, tools) => {
  message.delete();
  
  let invites = await message.guild.fetchInvites();
  
  
  invites = invites.array();
  arraySort(invites, 'uses', { reverse: true });
  
  let possibleInvites = [['User', 'Uses']];
  invites.forEach(function(invite) {
    possibleInvites.push([invite.inviter.username, invite.uses]);
  })
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
    .addField("• Server Invites •", message.guild.name)
  .setThumbnail('https://cdn.discordapp.com/attachments/612449196863127582/613384923180564491/sport_badges-05-512.png')
  .addField('• Leaderboard •', `\`\`\`${table.table(possibleInvites)}\`\`\``)
  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
  
  message.channel.send(embed);
  }


module.exports.help = {
  name: "leaderboard" 
}