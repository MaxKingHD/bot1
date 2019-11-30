const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require("snekfetch")
exports.run = async (client, message, args) => {
   message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred") 
  try {
        		const { body } = await superagent.get('http://api.adviceslip.com/advice');
        		message.channel.send(JSON.parse(body.toString()).slip.advice);
        	} catch (err) {
        		message.channel.send(`${red} **An error occurred: \`${err.message}\`. Try again later!**`);
        	}
        }
   
module.exports.help = {
name: "advice"
}