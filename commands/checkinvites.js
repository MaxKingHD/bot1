exports.run = (client, msg, args) => {
  msg.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  const members = msg.guild.members.filter(member => member.user.presence.game && /(discord\.(gg|io|me|li)\/.+|discordapp\.com\/invite\/.+)/i.test(member.user.presence.game.name));
  return msg.channel.send(members.map(member => `\`${member.id}\` ${member.displayName}`).join("\n") || `${red} **Nobody has an invite link as game name.**`);
}

exports.help = {
  name: 'checkinvites'
}