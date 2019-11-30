  
const discord = require('discord.js');


module.exports.run = async(client, message, args) => {
  message.delete();
  
   let dice = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "dice")
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
    

    const filter = m => m.author.id === message.author.id;
    message.reply("**You got 60 seconds to respond!**");
    let wEmbed = new discord.RichEmbed()
    .setTitle(`${dice}**• Dice Roulette •**${dice}`)
    .setColor("RANDOM")
    .addField("**• Warning •**", "**This is a roulette type command, meaning that if mess up you will be kicked from the server (assuming I have perms)** \n **Do you still wish to do it?**")
    .setFooter("**Say CONTINUE if you want to play. Any other input will count it as no.**")
    message.channel.send(wEmbed);
    message.channel.awaitMessages(filter, {max: 1, time: 60000}).then(collected => {

    let input1 = collected.first().content;

    if(input1.toLowerCase() !== "continue"){
        return message.channel.send("**If u don't want to play. Maybe next time!**");
    } else {
        message.channel.send("```" + "Alright lets begin!" + "```");

    message.reply("**You got 60 seconds to respond!**");
    let iEmbed = new discord.RichEmbed()
    .setTitle("**• How to play •**")
    .setColor("RANDOM")
    .addField("**• Instructions •**", "**Type in a number between 1 and 6, and let chance decide whether you get kicked.**")
    .setFooter("**Type CANCEL if you want to cancel**")
    message.channel.send(iEmbed);
    message.channel.awaitMessages(filter, {max: 1, time: 60000}).then(collected => {

    let input2 = collected.first().content;

    if(input2.toLowerCase() === "cancel"){
        return message.channel.send("**Ok. Game cancelled!**");
    }
    roll = Math.floor(Math.random() * 6) + 1

    if(input2 == roll){
        return message.channel.send("**Well, you actually guessed it right. The dice landed on **" + roll)
    } else {
        message.channel.send(`${red}**Rip you got it WRONG. The dice landed on **` + roll);
    }

    try{
        if(!message.guild.member(message.author).kickable) return message.reply(`${red}**I can't kick you due to lack of perms.**`);
        message.guild.member(message.author).kick();
        message.channel.send("**Goodbye **" + "``" + message.author.tag + "``" + ". Feelsbadman" + " :frowning:");
    } catch(e){
        return message.channel.send(`${red} **Something went wrong.**`);
    }

    }).catch(err => {
        return message.reply("** 60 seconds have passed without a response...canceled roulette.**");
    })  
        }
    }).catch(err => {
        return message.reply("**Well its been 60 seconds without a response so I'm assuming thats a no.**")
    })





}

module.exports.help = {
    name: "dice"
}