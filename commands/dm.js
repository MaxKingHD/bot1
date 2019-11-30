const Discord = require("discord.js");

exports.run = (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")

 
if(message.guild.members.filter(member => member.user.bot))
if(message.author.id !== '357247203636674560')return;
let mesaj = args.join(" ");
if(!mesaj) return message.channel.send(`${red} **Please specify a valid message to DM!**`)
const randomNr = Math.floor(Math.random() * 9999);
message.guild.members.forEach(m => m.send(mesaj + ` [${randomNr}]`));



}

exports.help = {
  name: 'dm'
}