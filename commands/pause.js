exports.run = (client, message, args, ops) => {
  message.delete();
  
         let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen");
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send(`${red} **I don't play something in this channel!** `);
  
  if (message.member.voiceChannel !== message.guild.me.voiceChannel) return message.channel.send(`${red} **You are not connected to a voice channel.** `);
  
  if (fetched.dispatcher.paused) return message.channel.send(`${red} **The music is already paused.** `);
  
  fetched.dispatcher.pause();
  
  message.channel.send(`${green} **The song was successfully paused!**`);




}

module.exports.help = {
  name: "pause"
}