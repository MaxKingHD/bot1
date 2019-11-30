const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
     let reason = args.join(' ');
    if (reason.length < 1) return message.channel.send(`${red} **You did not give the bot a question!**`);
    var ball = ['It is certain.','No doubt about it.','No chance.','Maybe, time will tell.','No way.','Concentrate and try again.', ' As I see it, yes', 'Outlook good', 'Most likely', 'Better not tell you now', 'My sources say no', 'Signs point to yes', 'Yes definitely', 'It is decidedly so', 'As I see it, yes', 'My sources say no', 'My sources say no', 'Outlook not so good', 'Very doubtful'];
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
    .addField("• You asked •", reason)
    .addField("• I say •", ball[Math.floor(Math.random () * ball.length)])
    .setThumbnail("https://i.imgur.com/C7lQZ5R.png")
    message.channel.send({embed})
}
module.exports.help = {
  name: "8ball"
}