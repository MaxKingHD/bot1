exports.run = (client, message, args, ops) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen") 

    if (!message.member.voiceChannel) return message.channel.send(`${red} **Please connect to a voice channel first.** `);

    if (!message.guild.me.voiceChannel) return message.channel.send(`${red} **Sorry, the bot isn't connected to the voice channel.** `);

    if (message.guild.me.voiceChannelID !== message.member.voiceChannelID) return message.channel.send(`${red} **Sorry, you are not connected to the same voice channel as bot.** `);

    message.guild.me.voiceChannel.leave();

    message.channel.send(`${green} **Leaving Channel...**`);

}

module.exports.help = {
    name: "leave"
}