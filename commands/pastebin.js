    
const RichEmbed = require("discord.js").RichEmbed;
const Attachment = require("discord.js").Attachment;
const Discord = require("discord.js");
const fs = require('fs')
const paste = require("better-pastebin");
const config = require("../config.json");
module.exports.run = (client, message, args) => {
  message.delete();
  
        let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen");
  
paste.setDevKey(config.pastebin.apiKey);

var pasteBinDat = message.content.split(' ').slice(1).join(' ')
  var pBD = pasteBinDat.split("||");
  
  var commandHelp = new Discord.RichEmbed()
  	.setColor("RANDOM")
  	.setTitle("• PasteBin Help •")
  	.setDescription("• Compose a Pastebin •\n\n• Note: Separate pastebin title and pastebin content with `||` \n\n" +
  					"Example:\n`pastebin Conspiracy Theory || The Earth is a Triangle`")
  	.setAuthor(client.user.username, client.user.displayAvatarURL)
    .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
  
  
  function argErr(ex) {
  	var pBError = new Discord.RichEmbed()
  	.setColor("RANDOM")
  	.setTitle("• Command Error •")
  	.setDescription(`${red} Sorry, but an unexpected error occurred...\nEx: ` + ex + "`")
  	.setAuthor(client.user.username, client.user.displayAvatarURL)
  	message.channel.stopTyping()
  return message.channel.send(pBError)
  }
  
  if(!pBD || pasteBinDat.length < 1 || pBD.length < 1 || !pBD[0] || !pBD[1] ) return message.channel.send(commandHelp)

  if(pBD[0].length < 1) return argErr(`${red} No Title or Description Provided`)
  if(pBD[1].length < 1) return argErr(`${red} No Description Provided (Make sure to separate yoour title and description with || )`) 

 message.channel.startTyping()
 
 setTimeout( () => { 
paste.login(config.pastebin.username, config.pastebin.password, function(success, data) {
    if(!success) {
        message.channel.send(`${red} An unexpected error occurred ` + data + "`").then(msg => {
        	 msg.channel.stopTyping()
        })
        return false;
    }
    
    var pasteCont = `${pBD[1]}\n\n\n\nTHIS PASTEBIN WAS CREATED USING THE EX3CUT0R DISCORD BOT BY AN ANONYMOUS DISCORD USER`
 
 	if(pasteCont.length > 512000) return argErr(`${red} PasteBin Content was greater than 512,000 characters`)
 	
    paste.create({
        contents: pasteCont,
        name: pBD[0],
        privacy: "0"
    }, function(success, data) {
        if(success) {
            //data contains the URL of the created paste
            var sendPasteBin = new Discord.RichEmbed()
            	.setColor("RANDOM")
            	.setTitle("• Successfully Created Pastebin •")
            	.setDescription(data)
            	.setURL(data)
            	.setAuthor(message.author.username, message.author.displayAvatarURL)
            message.channel.send(sendPasteBin).then(msg => {
        	 msg.channel.stopTyping()
        })
            return message.channel.stopTyping()
        } else {
            //data contains an Error object indicating why the creation failed
            var errorPB = new Discord.RichEmbed()
            	.setColor("RANDOM")
            	.setTitle("• Unexpected Error •")
            	.setDescription(data)
            	.setAuthor(message.author.username, message.author.displayAvatarURL)
            message.channel.send(errorPB).then(msg => {
        	 msg.channel.stopTyping()
        })
            return message.channel.stopTyping()
        }
        return message.channel.stopTyping()
    });
    return message.channel.stopTyping()
});
return message.channel.stopTyping()
}, Math.floor(Math.random() * 3000) + 1  ) 

return message.channel.stopTyping();
}
module.exports.help = {
	name: "pastebin"

}