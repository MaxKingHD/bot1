const discord = require('discord.js');



module.exports.run = async(client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen");
    

    let options = args.join(' ');
    let fOptions = options.split(' ').join(',');

    if(!options){
        return message.channel.send(`**1) no input provided** ${red}\n2) list contains a backtick ${red}\n3) more than one space between list items ${red}\n4) list starts with a space ${red}`);
    }
    else if(options.includes("`")){
        return message.channel.send(`1) no input provided ${red}\n**2) list contains a backtick** ${red}\n3) more than one space between list items ${red}\n4) list starts with a space ${red}`);
    }
    else if(options.includes('  ')){
        return message.channel.send(`1) no input provided ${red}\n2) list contains a backtick ${red}\n**3) more than one space between list items** ${red}\n4) list starts with a space ${red}`);
    }
    else if(options.startsWith(' ')){
        return message.channel.send(`1) no input provided ${red}\n2) list contains a backtick ${red}\n3) more than one space between list items ${red}\n**4) list starts with a space** ${red}`);
    }
            

    splitArray = options.split(' '); //returns a comma serperated array

    let decision = splitArray[Math.floor(Math.random() * splitArray.length)]; //randomly chooses from the array
    //console.log(splitArray)

    let dEmbed = new discord.RichEmbed()
    .setAuthor("Decide", client.user.displayAvatarURL)
    .setColor("RANDOM")
    .setDescription(`**Choices:** ` + "``" + fOptions + "``" + "\n**Decision:** " + "``" + decision + "``")
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)

    message.channel.send(dEmbed);

}


module.exports.help = {
    name: "pick"
}