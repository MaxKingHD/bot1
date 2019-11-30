const Discord = require('discord.js') 
exports.run = async (client, message, args) => { 
  message.delete();
  
let start = Date.now();
message.channel.send('Pong!').then(message => {
let diff = (Date.now() - start);
let API = (client.ping).toFixed(2)
let embed = new Discord.RichEmbed() 
.setTitle("🔔 Pong!") 
.setColor("RANDOM")
.addField("📶 Latency", `${diff}ms`, true) 
.addField("💻 API", `${API}ms`, true) 
.setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
message.edit(embed); 
}); 
} 
exports.help = { 
name: 'ping'
}