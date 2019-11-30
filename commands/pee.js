const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete();
  
         let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let plantos = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "plantos")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen");
  
    let replies = ["8=D", "8==D", "8===D", "8====D", "8=====D", "8==============D", "8=====================================D", "8===================================================D"];
    let result = Math.floor((Math.random() * replies.length));


    try {
       
        let newembed = new Discord.RichEmbed()
        .setColor("RANDOM")   
        .setDescription(`\n ${plantos} **Pee Size Machine** ${plantos}\n ` + replies[result])
        .setFooter(`${message.author.tag}'s pee`, message.author.avatarURL)

        message.channel.send({
            embed: newembed
        });
    } catch (e) {
        console.log(e.stack);
    }; 
};

module.exports.help = {
    name: "pee"
}