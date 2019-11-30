const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();
exports.run = (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")  
    let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")  
    let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")  
    
                        if (talkedRecently.has(message.author.id)) return message.channel.send(`${red} **You already reported a issue recently please wait another 30mins.**`);
                        let feedback = args.join(' ');
                            if (feedback.length < 10) return message.reply(`${red} **Feedback is too short minimum of 10 characters.**`).catch(console.error);
                        client.users.get("357247203636674560").send(`${verified} **Hey boss, a user has reported a issue on the bot:** ` + feedback + " | Sent in by: " + message.author.tag);
                            message.reply(`**thanks for reporting a issue/choosing to give feedback it has been sent!** ${verified}`)
                    talkedRecently.add(message.author.id);
                    setTimeout(() => {
                        talkedRecently.delete(message.author.id);
                    }, 30 * 60000);
}

module.exports.help = {
  name: "issue" 
}