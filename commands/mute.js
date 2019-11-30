const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const ms = require("ms");

exports.run = async (client, message, args) => { 
   message.delete();

   let succes = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
   let succesx = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
   let mUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!message.member.hasPermission("MUTE_MEMBERS")) return message.channel.send(`${succesx} **You don't have sufficent permissions to do that!**`);
    if(!mUser) return message.channel.send(`${succesx} **You need to mention someone.**`)
    let mReason = args.join(' ').slice(32);
    if(!mReason) mReason = "Without reason";

    if(mUser.hasPermission("BAN_MEMBERS")) return message.channel.send(`${succesx} **You can't mute this user.**`)
    let user = message.mentions.users.first();
    if(user) user.toString();

let muterole = message.guild.roles.find(`name`, "Chat Restricted");
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Chat Restricted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
  
    let mutetime = args[1];
    if (!mutetime) return message.channel.send(`${succesx} **You need to specify the time.**`)

    let uRole = message.member.guild.roles.find("name", "Member")

    await (mUser.addRole(muterole.id));
    message.channel.send(`${succes} **Succesfully muted  \`${mUser.user.tag}\`(\`${mUser.id}\`) for reason:** \`${mReason}\` for **${ms(ms(mutetime))}**, by: ${message.author.tag}.`);
    message.react('❤');

    setTimeout(function() {
        mUser.removeRole(muterole.id)
        message.channel.send(`${succes} User \`${mUser.user.tag}\` was succesfully unmuted.`);
        message.react('❤');
    }, ms(mutetime));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'mute'
};