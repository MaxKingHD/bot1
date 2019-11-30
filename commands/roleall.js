const Discord = require("discord.js");
const client = new Discord.Client();


exports.run = (client, message, args) => {
  message.delete();
  
    let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");
  
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${red} **You're missing MANAGE_ROLES permission!** `)
   
        var userz = message.guild.members.array();
        const roletogive = args.join(" ")
        
        let subscriberRole = client.guilds.get(message.guild.id).roles.find(r => r.name == roletogive);
        if (!subscriberRole) return message.channel.send(`${red} **I can not find the role: ` + roletogive + `** `);

      
            
                userz.forEach(u => {
                    u.addRole(subscriberRole)
                })
                message.channel.send(`**I have given the role ` + roletogive + ` to all members.**`)
            
      

        
    }

    

module.exports.help = {
  name: "roleall"
}


