module.exports.run = (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
   let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
  
  let mid = args.join(' ');
  if (!message.member.hasPermission(["BAN_MEMBERS"], false, true, true)) return message.channel.send(`${red} **You don't have permission to use this command.**`);
    client.fetchUser(mid).then(id => {
      message.guild.ban(id).catch(err => {
        message.channel.send(`${red} **Failed to ban user** `+id)
        console.log(err)
      })
      message.channel.send(`${green} **Alright, I banned the user ${id}.**`)
    }).catch(() => {
      message.channel.send(`${red} **There's no user with the ID of ${mid}, please try again.**`)
    })
}

module.exports.help = {
  name: "hackban"
}