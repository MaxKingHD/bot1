exports.run = (client, message, args, ops) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send(`${red} **I don't play something in this channel!** `);
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`${red} **Something went wrong, try again please!** `);
  
  if (!fetched.dispatcher.paused) return message.channel.send(`${red} **The music isn't stopped!** `);
  
  fetched.dispatcher.resume();
  
  message.channel.send(`${green} **The song was successfully resumed!** ${fetched.queue[0].songTitle}`);




}

module.exports.help = {
  name: "resume"
}