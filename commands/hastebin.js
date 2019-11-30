const snekfetch = require('snekfetch');

module.exports.run = async (client, message, args) => {
  message.delete();
 
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
   let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
  
  if (!message.guild.id === "608289298537775127") return message.channel.send(`${red} **This command requires Sonic Premium subscription.**`)

	if (!args.slice(0)
		.join(' ')) return message.channel.send(`${red} **Arguments are missing or they are not entered well.**`)
	snekfetch.post('https://hastebin.com/documents')
		.send(args.slice(0)
			.join(' '))
		.then(body => {
			message.channel.send(`${green} **Posted text to Hastebin:** https://hastebin.com/` + body.body.key);
    
		});
}
		
module.exports.help = {
	name: "hastebin"
}