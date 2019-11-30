const discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  message.delete();
  
          let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let ship = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "rainbowsheep");
    

     let chance = Math.floor(Math.random() * 100) + 1

    if(!args[0]){
        var nembed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setTitle(`${verified} Purerate Randomizer`)
        .setDescription("You are " + chance + "% pure")
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)

        return message.channel.send(nembed);
    } 
    var rembed = new discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle(`${verified} Purerate Randomizer`)
    .setDescription(args.join(' ') + " is " + chance + "% pure")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    

    return message.channel.send(rembed)

}

module.exports.help = {
    name: "purerate"
}