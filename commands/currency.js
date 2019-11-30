const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch');

exports.run = async (client, message, args) => {
  message.delete();
  
  let money = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "money")
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
      const base = args[0];
      const to = args[1];
      const amount = args[2]
        if (base === to) return message.channel.send(`${red} **Converting ${base} to ${to} is the same value.**`);
        const { body } = await snekfetch
            .get('http://data.fixer.io/api/latest?access_key=cf6d5cde1f82593a8774e653a0e73a44')
            .query({
                base,
                symbols: to
            });
            const tofixed = parseFloat(amount).toFixed(2)
            const tofixed2 = parseFloat(body.rates[to]).toFixed(2)
        message.channel.send(`${money} ** ${tofixed} ${base} is ${tofixed * tofixed2} ${to}. **`).catch(console.error);
    }
   
module.exports.help = {
name: "currency"
}