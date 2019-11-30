const Discord = require("discord.js");
const client = new Discord.Client();
const math = require('mathjs');
exports.run = async (client, message, args) => {
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen") 
  
    const expression = args.join(" ");
        try {
            const solved = math.eval(expression).toString();
            return message.channel.send(`${green} **The answer is: **` + solved);
        } catch (err) {
            return message.channel.send(`${red} **An error happened, more details: **` + err);
        }
}
module.exports.help = {
name: "math"
}