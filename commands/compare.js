const discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  message.delete();
  
    let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")

    var half = ["dumber", "smarter", "thiccer", "friendlier", "gayer", "straighter", "meaner", " more cash money"]
    let percent = Math.floor(Math.random() * 100) + 1

    chance2 = half[Math.floor(Math.random() * half.length)];

     //args[number] just means what number in the order of words will be used. First word of an input is args[0] and plus one from there
    if(!args[0]) return message.channel.send(`${red} **You need to compare something... (Use compare then 2 names. Ex. compare yin yang)!**`)
    if(!args[1]) return message.channel.send(`${red} **You need 2 things in order to compare them (Compare then 2 names. Ex compare yin yang)!**`)
    var sembed = new discord.RichEmbed()
    .setColor('RANDOM')
    .addField("• Comparing stuff •", args[0] + " is " + percent + "% " + chance2 + " than " + args[1] + "\n\n Possible random outputs = [dumber, smarter, thiccer, friendlier, gayer, straighter, meaner, cash money]", true)
    .setThumbnail(message.author.displayAvatarURL)
    

    return message.channel.send(sembed);

}

module.exports.help = {
    name: "compare"
}