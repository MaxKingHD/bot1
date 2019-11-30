const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");


exports.run = (client, message, args) => { 
  message.delete();
  
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  let gway = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "giveaway")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
  
 

    const moment = require('moment');
    const ms = require('ms')
    var prefix = '/'  
  var time = moment().format('Do MMMM YYYY , hh:mm');
  var room;
  var title;
  var duration;
  var currentTime = new Date(),
hours = currentTime.getHours() + 3 ,
minutes = currentTime.getMinutes(),
done = currentTime.getMinutes() + duration,
seconds = currentTime.getSeconds();
if (minutes < 10) {
minutes = "0" + minutes;
}
var suffix = "AM";
if (hours >= 12) {
suffix = "PM";
hours = hours - 12;
}
if (hours == 0) {
hours = 12;
}
 
  var filter = m => m.author.id === message.author.id;
  if(message.content.startsWith(prefix + "gstart")) {
 
    if(!message.guild.member(message.author).hasPermission('MANAGE_GUILD')) return message.channel.send(`:x: | You don't have acces to use this command!**`);
    message.channel.send(`:x: | **You need to type the channel name!**`).then(msg => {
      message.channel.awaitMessages(filter, {
        max: 1,
        time: 20000,
        errors: ['time']
      }).then(collected => {
        let room = message.guild.channels.find('name' , collected.first().content);
        if(!room) return message.channel.send(`${red} | **I can not find that channel, sorry type the name please!**`);
        room = collected.first().content;
        collected.first().delete();
        msg.edit(`${green} | **Now time the time!**`).then(msg => {
          message.channel.awaitMessages(filter, {
            max: 1,
            time: 20000,
            errors: ['time']
          }).then(collected => {
            if(!collected.first().content.match(/[1-60][s,m,h,d,w]/g)) return message.channel.send(`${red} | **Our Bot is not supporting this time!**`);
            duration = collected.first().content
            collected.first().delete();
            msg.edit(`${green} | **Now please type the prize!**`).then(msg => {
              message.channel.awaitMessages(filter, {
                max: 1,
                time: 20000,
                errors: ['time']
              }).then(collected => {
                title = collected.first().content;
                collected.first().delete();
                msg.delete();
                message.delete();
                try {
                  let giveEmbed = new Discord.RichEmbed()
                  .setDescription(`**${title}** \nReact With 🎁 To Enter! \nTime remaining : ${duration} \n **Created at :** ${hours}:${minutes}:${seconds} ${suffix}`)
                  .setFooter(message.author.username, message.author.avatarURL);
                  message.guild.channels.find("name" , room).send(` ${gway} **Giveaway created!** ${gway}` , {embed: giveEmbed}).then(m => {
                     let re = m.react("🎁");
                     setTimeout(() => {
                       let users = m.reactions.get(`${gway}`).users
                       let list = users.array().filter(u => u.id !== m.author.id !== client.user.id);
                       let gFilter = list[Math.floor(Math.random() * list.length) + 0]
                       let endEmbed = new Discord.RichEmbed()
                       .setAuthor(message.author.username, message.author.avatarURL)
                       .setTitle(title)
                       .addField(`Giveaway Ended !${gway}`,`Winners : ${gFilter} \nEnded at :`)
                       .setTimestamp()
                     m.edit(`** ${gway} GIVEAWAY ENDED ${gway}**` , {embed: endEmbed});
                    message.guild.channels.find("name" , room).send(`**Congratulations ${gFilter}! You won The \`${title}\`**` ,)
                }, ms(duration));
            });
                } catch(e) {
                message.channel.send(`${red} | **You need to give me some permissions to make the giveaway!**`);
                  console.log(e);
                }
              });
            });
          });
        });
      });
    });
  }
};



exports.help = {
  name: 'gstart'
}