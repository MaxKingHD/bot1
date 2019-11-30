const Discord = require("discord.js");


module.exports.run = async (client, message, args) => {
  message.delete();
  
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  
  const Options = {
    temporary: false,
    maxAge: 0,
    maxUses: 0,
    unique: true
  };
  
  let invite = message.channel.createInvite(Options).then(function(Invite){
    message.author.send({embed: {
      title: `• INVITE •`,
      description: `${verified} **Here is the invite:**\nhttps://discord.gg/` + Invite.code
    }})
    });
  
}

module.exports.help = {
  name: "createinvite"
}