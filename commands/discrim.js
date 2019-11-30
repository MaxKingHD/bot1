    
const Discord = require("discord.js");

module.exports.run = (client, message, args, tools) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")

    if (isNaN(args[0]) || args[0] > 9999 || args[0] < 1) {
       return message.channel.send(`${red} **Arguments are missing or they are not entered well.**`);   
    }

   let discrims = '';
   client.users.map(function(user) {
       if (user.discriminator == args[0]) return discrims += `• ${user.username}#${user.discriminator} - ${user.id}\n`;
});
                 
  if (!isNaN(args[0]) || args[0] > 9999 || args[0] < 1) { 
    const embed = new Discord.RichEmbed()
    .setAuthor(`#️⃣ Discriminator: #${args[0]}`)
    .setColor("RANDOM")
    .setDescription(discrims || `${red} No members with this discriminator were found.`);
    message.channel.send(embed)
  }

}



module.exports.help = {
  name: "discrim"
}