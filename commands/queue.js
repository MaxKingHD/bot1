exports.run = async (client, message, args, ops) => {
message.delete();
  
           let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
 
  
  let fetched = ops.active.get(message.guild.id);
  
  if (!fetched) return message.channel.send(`${red} **Queue is empty, use !play to add a song!** `);
  
  let queue = fetched.queue;
  
  let nowPlaying = queue[0];
  
  let resp = `__**Now playing**__\n**${nowPlaying.songTitle}** -- **Requested By:** *${nowPlaying.requester}*\n\n__**Next Songs**__\n`;
  
  for (var i=1; i < queue.length; i++) {
    resp += `${i}. **${queue[i].songTitle}** -- **Requested By:** *${queue[i].requester}*\n`;
  }
  message.channel.send(resp);

}

module.exports.help = {
  name: "queue"
}