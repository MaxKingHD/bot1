const Discord = require("discord.js");
const client = new Discord.Client();
exports.run = (client, message, args) => {
  message.delete();
  
 let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
 let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
  if (!message.member.permissions.has("MANAGE_CHANNELS")) return message.channel.send(`${red} **Sorry, you do not have permission to perform the antiraid command.**`);
  if (!message.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) return message.reply(`${red} **Sorry, i dont have the perms to do this cmd i need MANAGE_CHANNELS.**`)
  const ms = require('ms');
  if (!client.lockit) client.lockit = [];
  const time = args.join(' ');
  const validUnlocks = ['release', 'unlock', 'stop', 'off'];
  if (!time) return message.reply(`${red} **You must set a duration for the lockdown in either hours, minutes or seconds!**`);

  if (validUnlocks.includes(time)) {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send(`${green} **Lockdown lifted.**`);
      clearTimeout(client.lockit[message.channel.id]);
      delete client.lockit[message.channel.id];
    }).catch(error => {
      console.log(error);
    });
  } else {
    message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(`${green} **Channel locked down for ${ms(ms(time), { long:true })}.**`).then(() => {

        client.lockit[message.channel.id] = setTimeout(() => {
          message.channel.overwritePermissions(message.guild.id, {
            SEND_MESSAGES: true
          }).then(message.channel.send(`${green} **Lockdown lifted.**`))
          delete client.lockit[message.channel.id];
        }, ms(time));
      }).catch(error => {
        console.log(error);
      });
    });
  }
}
module.exports.help = {
  name: "antiraid"
}