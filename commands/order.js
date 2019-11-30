const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();
exports.run = (client, message, args) => {
  message.delete();
  
    let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let bag = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "bag");
  
                        if (talkedRecently.has(message.author.id)) return message.channel.send(`${red} **You already ordered an item recently please wait another 30mins.** `);
                        let feedback = args.join(' ');
                            if (feedback.length < 10) return message.reply(`${red} **Order text is too short minimum of 10 characters.** `).catch(console.error);
                        client.users.get("357247203636674560").send(`🛍 **Hey boss, a user has ordered an item:** ` + feedback + " **| Sent by: **" + message.author.tag);
                            message.reply(`**Thanks for ordering an item!** ${bag}`)
                    talkedRecently.add(message.author.id);
                    setTimeout(() => {
                        talkedRecently.delete(message.author.id);
                    }, 30 * 60000);
}

module.exports.help = {
  name: "order" 
}