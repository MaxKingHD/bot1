module.exports.run = (client, message, args) => {
  message.delete();
   
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");
  
  if(!args[0]) return message.channel.send(`${red} **Please type a hex color id or a color name with uppercase!**`)
message.guild.createRole({
  name: `RoleColor`,
  color: args[0],
})
.then(role=>message.member.addRole(`${role.id}`))


    
}

module.exports.help = {
    name: "rolecolor"
}