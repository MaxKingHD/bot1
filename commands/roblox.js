const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require('snekfetch')
exports.run = (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");
  
        let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        superagent.get(url).then(result => {
              const data = result.body.Id;
              if (saybot.length < 1) return message.channel.send(`${red} **Need to provide a username to use this command.** `)
              if (result.body.Id === "undefined") return message.channel.send(`${red} **Couldn't find a roblox user by the name of:** ` + saybot)
              const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
              superagent.get(url2).then(a => {
                const Verifiedcheck = a.body
                  const embed = new Discord.RichEmbed()
                  .setColor("RANDOM")
                  .setTitle("• Username: " + saybot)
                  .setDescription("User ID: " + data)
                  .addField("• Verified", Verifiedcheck)
                  .setFooter("• Profile Link: " + `https://web.roblox.com/users/${data}/profile`)
                  .setThumbnail("https://roblox.com/Thumbs/BCOverlay.ashx?username=" + saybot)
                  .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot)
                  .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL)
                  message.channel.send({embed}).catch(console.error);
                })
            }) 
  };

module.exports.help = {
name: "roblox"
}
