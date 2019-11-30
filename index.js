const Discord = require("discord.js");
const weather = require('weather-js');
const tokenfile = require("./token.json");
const client = new Discord.Client({disableEveryone: true});
const fs = require("fs");
const superagent = require("snekfetch");
const rp = require('request-promise-native');
const { letterTrans } = require('custom-translate');
const randomPuppy = require('random-puppy');
const Minesweeper = require('discord.js-minesweeper');
const db = require("quick.db");
client.commands = new Discord.Collection();

     

/*blackjack*/

/*var draw1;
var draw2;
var players = [];
var credits = [];
var cardNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var royals = ["Jack", "Queen", "King"];
var card3 = Math.floor(Math.random() * 13);
var game = false;
var total = 0;
var c3f = ["10", "Jack", "Queen", "King"]; */

/*Options*/

let ops = {
    ownerID: '357247203636674560',
    active: new Map()
};

/*Server Stats*/

const serverStats = {
    guildID: '616965689005047809',
    totalUsersID: '616969044301709313',
    memberCountID: '616969263365750787',
    botCountID: '616969350687227914'
}

const botStats = {
  totalGuildsID: '',
  totalUsersID: '',
  totalChannelsID: ''
};

/*Command Handler*/

fs.readdir("./commands/", (err, files) => {
  
  if(err) console.log(err);
  
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }
  
  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    client.commands.set(props.help.name, props);
  });
  
});

/*Host*/

const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + "");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

/*End of Host*/

client.on('ready', () => {
  console.log(`${client.user.username} is online!`);
  const statuses = [
    `/help • ${client.guilds.size} Guilds! •`,
    `4aces.cf`,
    ]; 
    setInterval(() => {
        const status = statuses[Math.floor(Math.random() * statuses.length)]; 
        client.user.setActivity(status, {
  type: "STREAMING",
  url: "https://www.twitch.tv/twitch"
}); 
    }, 3000); 
});

client.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  if(message.content.indexOf("/") !== 0) return;
  
  let prefix = "/";
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  
  
  let commandfile = client.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client, message, args, ops);
  
  /*quickdb*/
            
  
 /*Verify System*/
  
  /*ReactionRole*/

const yourID = "357247203636674560";
const setupCMD = "/setupverify"
let initialMessage = `✅ *Welcome on our server!*\n\n**Click emoji below to have access for all channels!**`
const roles = ["Verify - System"];
const reactions = ["✅"];
if (roles.length !== reactions.length) throw ":x: **Roles list and reactions list are not the same length!**";
function generateMessages(){
    var messages = [];
    messages.push(initialMessage);
    for (let role of roles) messages.push(`» *${role}*`); 
    return messages;
}

client.on("message", message => {
    if (message.author.id == yourID && message.content.toLowerCase() == setupCMD){
        var toSend = generateMessages();
        let mappedArray = [[toSend[0], false], ...toSend.slice(1).map( (message, idx) => [message, reactions[idx]])];
        for (let mapObj of mappedArray){
            message.channel.send(mapObj[0]).then( sent => {
                if (mapObj[1]){
                  sent.react(mapObj[1]);  
                } 
            });
        }
    }
})
client.on('raw', event => {
    if (event.t === 'MESSAGE_REACTION_ADD' || event.t == "MESSAGE_REACTION_REMOVE"){
        
        let channel = client.channels.get(event.d.channel_id);
        let message = channel.fetchMessage(event.d.message_id).then(msg=> {
        let user = msg.guild.members.get(event.d.user_id);
        
        if (msg.author.id == client.user.id && msg.content != initialMessage){
               
            if (user.id != client.user.id){
                var roleObj = msg.guild.roles.find('name', "Member");
                var memberObj = msg.guild.members.get(user.id);
                
                if (event.t === "MESSAGE_REACTION_ADD"){
                    memberObj.addRole(roleObj)
                } else {
                    memberObj.removeRole(roleObj);
                }
            }
        }
        })
 
    }   
}); 
  
  /*XO Game*/
/*
client.on('message' , message => {
  var prefix = "!"; 
  if(message.author.bot) return;
  
if (message.content.startsWith(prefix + "xo")) {
 let array_of_mentions = message.mentions.users.array();
  let symbols = [':o:', ':heavy_multiplication_x:'] 
  var grid_message;

  if (array_of_mentions.length == 1 || array_of_mentions.length == 2) {
    let random1 = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
    let random2 = Math.abs(random1 - 1); 
    if (array_of_mentions.length == 1) {
      random1 = 0;
      random2 = 0;
    }
    let player1_id = array_of_mentions[random1].id;
    let player2_id = array_of_mentions[random2].id;
    var turn_id = player1_id;
    var symbol = symbols[0];
    let initial_message = `Match Between <@${player1_id}> and <@${player2_id}>!`;
    if (player1_id == player2_id) {
      initial_message += '\n_Who is the loser, you play this role with yourself :joy:)_'
    }
    message.channel.send(`xo! ${initial_message}`)
    .then(console.log("Successful tictactoe introduction"))
    .catch(console.error);
    message.channel.send(':one::two::three:' + '\n' +
                         ':four::five::six:' + '\n' +
                         ':seven::eight::nine:')
    .then((new_message) => {
      grid_message = new_message;
    })
    .then(console.log("Successful xo game initialization"))
    .catch(console.error);
    message.channel.send('**Loading ... Wait for the reaction** :ok:')
    .then(async (new_message) => {
      await new_message.react('1⃣');
      await new_message.react('2⃣');
      await new_message.react('3⃣');
      await new_message.react('4⃣');
      await new_message.react('5⃣');
      await new_message.react('6⃣');
      await new_message.react('7⃣');
      await new_message.react('8⃣');
      await new_message.react('9⃣');
      await new_message.react('🆗');
      await new_message.edit(`<@${turn_id}>'s Turn, playing => ${symbol}`)
      .then((new_new_message) => {
        require('./xo.js')(client, message, new_new_message, player1_id, player2_id, turn_id, symbol, symbols, grid_message);
      })
      .then(console.log("**Successful xo listener initialization**"))
      .catch(console.error);
    })
    .then(console.log("**Successful xo react initialization**"))
    .catch(console.error);
  }
  else {
    message.reply('**Use this : `!xo @player1 @player2`**')
    .then(console.log("**Successful error reply**"))
    .catch(console.error);
  }
}
 
}); */
  
  
  /*BlackJack*/
  
 /* client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content == "!blackjack" && game == false) {
            msg.channel.send("Starting new game");
            if (!players.includes(msg.author.id)) {
                console.log("adding new user! " + msg.author.id);
                players.push(msg.author.id);
                credits.push(200);
            }
            credits[players.indexOf(msg.author.id)] -= 50;
            draw1 = Math.floor(Math.random() * 13);
            draw2 = Math.floor(Math.random() * 13);
            if (draw1 > 10) {}
            console.log("New Game by " + msg.author.id);
            console.log(draw1);
            console.log(draw2);
            game = true;
            total = 0;
            msg.channel.send("--Commands--");
            msg.channel.send("!hit - draws new card to add to total");
            msg.channel.send("!stay - keeps current cards for final amount");

            if (draw1 > 9 && draw2 > 9) {
                if (draw2 = 10) {
                    total = 1 + draw1 + draw2;
                } else if (draw = 11) {
                    total = draw1 + draw2;
                } else {
                    total = draw1 + draw2 - 1;
                }
                if (draw2 = 10) {
                    total += 1;
                } else {
                    total -= 1;
                }
                msg.channel.send("You pulled a " + royals[(draw2) - 10] + " and a " + royals[(draw1) - 10] + " for a total of 20");

            } else if (draw1 > 9) {
                if (draw1 = 10) {
                    total = 1 + draw1 + draw2;
                } else if (draw1 = 11) {
                    total = draw1 + draw2;
                } else {
                    total = draw1 + draw2 - 1
                }
                msg.channel.send("You pulled a " + cardNums[draw2] + " and a " + royals[(draw1) - 10] + " for a total of " + total);

            } else if (draw2 > 9) {
                if (draw2 = 10) {
                    total = 1 + draw1 + draw2;
                } else if (draw2 = 11) {
                    total = draw1 + draw2;
                } else {
                    total = draw1 + draw2 - 1
                }
                msg.channel.send("You pulled a " + royals[(draw2) - 10] + " and a " + cardNums[draw1] + " for a total of " + total);

            } else {
                total = 2 + draw1 + draw2;
                msg.channel.send("You pulled a " + cardNums[draw2] + " and a " + cardNums[draw1] + " for a total of " + total);
            }
        } else {
            msg.channel.send("There is already a game in progress!");
        }
    }
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content == "!hit" && game == true) {
            card3 = Math.floor(Math.random() * 13);
            if (card3 >= 10) {
                card3 = 10;
                c3f[Math.floor(Math.random() * 3)];
                msg.channel.send("You pulled a " + c3f[Math.floor(Math.random() * 3)] + " and had " + total);
                total += card3;
            } else {
                msg.channel.send("You pulled a " + cardNums[card3] + " and had a total of " + total);
                total = total + 1 + card3
            }
            msg.channel.send("Your new Total is " + total);
            if (total > 21) {
                msg.channel.send("Bust!");
                game = false;
            }
        }
    }
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content == "!stay" && game == true) {
            var dealerTotal = Math.floor(Math.random() * 6) + 17;
            msg.channel.send("You stood at a final total of " + total);
            msg.channel.send("The dealer stood with a total of " + dealerTotal);
            if (total <= dealerTotal && dealerTotal <= 21) {
                msg.channel.send("You Lose");
            } else {
                msg.channel.send("You Win!");
                credits[players.indexOf(msg.author.id)] += 100;
            }
            game = false;
            msg.channel.send("You now have " + credits[players.indexOf(msg.author.id)] + " credits");
        }
    }
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content == "!credits" && players.includes(msg.author.id)) {
            msg.channel.send("You currently have " + credits[players.indexOf(msg.author.id)] + "credits!");
        } else {
            msg.channel.send("You have not setup an account, use !blackjack to start a game and setup your account!");
        }
    }
});

client.on('message', msg => {
    if (msg.author.id != client.user.id) {
        if (msg.content == "!shop" && players.includes(msg.author.id)) {
            msg.channel.send("---Shop---");
            msg.channel.send("Basic Rank - 500 Credits");
            msg.channel.send("Cool Kid - 750 Credits");
            msg.channel.send("Epic Gamer - 1000 Credits");
            msg.channel.send("Overlord - 2000 credits");
            msg.channel.send("----------");
        } else {
            msg.channel.send("You have not setup an account, use !blackjack to start a game to setup your account!");
        }
    }
});
*/
  
  /*ServerStats autorole etc.*/
  
});

  client.on('guildMemberAdd', member => {  
        if (member.guild.id !== serverStats.guildID) return;
        client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
        client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
        client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

});
  
  client.on('guildMemberRemove', member => {
        if (member.guild.id !== serverStats.guildID) return;
        client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
        client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`);
        client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`);

});

  /*Join message*/

  client.on('guildMemberAdd', member =>{
      let embed = new Discord.RichEmbed()
      .setThumbnail("https://imgur.com/29AtkE1.gif")
      .setDescription('👑 **' + member.user.username + ' joined the server!**')
      .setFooter('Now we are ' + member.guild.memberCount + ' members!' )
      .setColor("#ffd633") 
      member.guild.channels.get('616966261041004544').send(embed)
});

/*Quit message*/

client.on('guildMemberRemove', member =>{
      let embed = new Discord.RichEmbed()
      .setThumbnail("https://imgur.com/XGxH1iK.gif")
      .setDescription('🎯 **' + member.user.username + ' left the server!**')
      .setFooter('Now we are ' + member.guild.memberCount + ' members!')
      .setColor("#ffffff")
      member.guild.channels.get('616966261041004544').send(embed)

});

  /*Bot Stats*/

client.on('guildCreate', guild => {
  
  client.channels.get(botStats.totalGuildsID).setName(`Total Guilds : ${client.guilds.size}`);
  client.channels.get(botStats.totalUsersID).setName(`Total Users : ${client.guild.reduce((a, g) => a + g.memberCount, 0)}`);
  client.channels.get(botStats.totalChannelsID).setName(`Total Channels : ${client.channels.size}`);
  
});

  
client.on('guildDelete', guild => {
  
  client.channels.get(botStats.totalGuildsID).setName(`Total Guilds : ${client.guilds.size}`);
  client.channels.get(botStats.totalUsersID).setName(`Total Users : ${client.guild.reduce((a, g) => a + g.memberCount, 0)}`);
  client.channels.get(botStats.totalChannelsID).setName(`Total Channels : ${client.channels.size}`);
  
});

/*Rainbow*/
/*client.on("ready", () => {
    function refresh() {
      setTimeout(() => {
        client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#e74c3c'});
            setTimeout(() => {
                client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#043fe2'});
                setTimeout(() => {
                    client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#11c63c'});
                    setTimeout(() => {
                        client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#e08d59'});
                        setTimeout(() => {
                            client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#e01d33'});
                            setTimeout(() => {
                                client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#6477f4'});
                                setTimeout(() => {
                                    client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#64f49f'});
                                    setTimeout(() => {
                                        client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#646df4'});
                                        setTimeout(() => {
                                            client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#420040'});
                                            setTimeout(() => {
                                                client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#adb8d8'});
                                                setTimeout(() => {
                                                    client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#f4f47f'});
                                                    setTimeout(() => {
                                                        client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#ad7ef4'});
                                                        setTimeout(() => {
                                                            client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#cebee5'});
                                                            setTimeout(() => {
                                                                client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#bc187b'});
                                                                setTimeout(() => {
                                                                    client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#c18dad'});
                                                                    setTimeout(() => {
                                                                        client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#e8bb63'});
                                                                        setTimeout(() => {
                                                                            client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#e892b7'});
                                                                            setTimeout(() => {
                                                                                client.guilds.get('616965689005047809').roles.find('name', 'Rainbow').edit({color: '#d7e8dd'});
                                                                                    setTimeout(refresh, 1000);
                                                                            }, 1000)
                                                                        }, 1000)
                                                                    }, 1000)
                                                                }, 1000)
                                                            }, 1000)
                                                        }, 1000)
                                                    }, 1000)
                                                }, 1000)
                                            }, 1000)
                                        }, 1000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
      }, 1000)
    }
    refresh();
}); 
*/

/*List Servers where is bot*/

client.on('ready', () => {
    // List servers the bot is connected to
    console.log("Servers:")
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
    })
});

  /*NoInvites*/


 client.on("message", async message => {
db.add(`guildMessages_${message.guild.id}_${message.author.id}`, 1);
 if(message.author.bot) return;
  if(message.channel.type === "dm") return;

const ceva = ["discord.gg", ".gg", ".rip", ".me", "discord . me", "discord me/ ", "discord gg / ", "discord . gg / ", "discord .gg /", "discord .gg/ " ];
  if(ceva.some(cuvant => message.content.includes(cuvant)) ) {
    if(message.member.hasPermission("ADMINISTRATOR")) return;
    message.channel.send(`:x: **| There is now allowed to write others invite links!**`).then(msg => msg.delete(3000));
   message.delete()
 }
  }); 

/*Captcha*/

const prefix = "/"

     const verifyj = JSON.parse(fs.readFileSync("./verify.json", "utf8"))

client.on('message', async message => {
    let messageArray = message.content.split(" ");
   if(message.content === `${prefix}setcaptcha`) {
        
    let filter = m => m.author.id === message.author.id;
    let ch;
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`**You don't have sufficent permissions to do that!**`).then(msg => {
       msg.delete(4500);
       message.delete(4500);
    });
    
    message.channel.send(`**Now type the verify channel name!**`).then(msg => {

        message.channel.awaitMessages(filter, {
          max: 1,
          time: 90000,
          errors: ['time']
        })
        .then(collected => {
            collected.first().delete();
            ch = collected.first().content;
            let chf = message.guild.channels.find('name', `${ch}`)
            if(!chf) return msg.edit(`**The name that you typed isn't exist [Type again the command!]**`) && console.log(`[-] The Verify Channel isn't exist!`)
            let rr;
            msg.edit(`**Now type the verify role name!**`).then(msg => {
      
                message.channel.awaitMessages(filter, {
                  max: 1,
                  time: 90000,
                  errors: ['time']
                })
                .then(collected => {
                    collected.first().delete();
                    rr = collected.first().content;
                    let rf = message.guild.roles.find('name', `${rr}`)
                    if(!rf) return msg.edit(`**The name that you typed isn't exist [Type again the command!]**`) && console.log(`[-] The Verify Role isn't exist!`)
                    msg.edit(`{yes} **Succesfully, the captcha is now activated!**`).then(msg => {
        
                      message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 90000,
                        errors: ['time']
                      })
                      let embed = new Discord.RichEmbed()
                      .setTitle('**Done the captcha has been activated!**')
                      .addField('`Captcha Channel:`', `${ch}`)
                      .addField('`Verfied Role:`', `${rr}`)
                      .setThumbnail(message.author.avatarURL)
                      .setFooter(`${client.user.username}`)
                     message.channel.sendEmbed(embed)
    verifyj[message.guild.id] = {
        channel: ch,
        rolev: rr,
        onoff: 'On'
    }
    fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
    if (err) console.error(err)
  })
   } 
            )
        })
    })
})
    })
}})             

client.on('message', async message => {

if(message.content == `${prefix}captcha off`) {
    if(!verifyj[message.guild.id]) verifyj[message.guild.id] = {
        channel: "verify",
        onoff: "Off",
        rolev: "[ 🎓 ] Users"
    }
    if(verifyj[message.guild.id].onoff === "Off") return message.channel.send(`**The captcha is almost deactivated!**`)
verifyj[message.guild.id].onoff = "off"
message.channel.send(`**Successfully turned off!**`)
fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
    if (err) console.error(err)
  })
}
})


client.on('message', async message => {
    if(message.author.bot) return;
    if(!message.channel.type === 'dm') return;
let rf = message.guild.roles.find('name', `${verifyj[message.guild.id].rolev}`)
 let mem = message.guild.member(message.author)
    if(message.content.startsWith(prefix + 'captcha')) {
        if(!verifyj[message.guild.id]) verifyj[message.guild.id] = {
            channel: "verify",
            onoff: "Off",
            rolev: "[ 🎓 ] Users"
        }
        if(verifyj[message.guild.id].onoff === "Off") return console.log(`**The captcha is deactivated!**`)
    if(message.channel.name !== verifyj[message.guild.id].channel) return console.log(`[-] Wrong typed channel!`)
      if(mem.roles.has(rf.id)) return message.channel.send(`**You are already verified!**`)
  const type = require('./verifycodes.json');
  const item = type[Math.floor(Math.random() * type.length)];
  const filter = response => {
      return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
  };
    const embed = new Discord.RichEmbed()
    .setTitle('**You need to type the captcha code in 30 seconds!**')
    .setColor("#f01b13")
    .setImage(`${item.type}`)
    message.channel.sendEmbed(embed).then(() => {
              message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
      .then((collected) => { 
        message.author.send(`**${collected.first().author}** **Successfully you got verified role!**`);
      message.channel.send(`**${collected.first().author}** **Successfully you got verified role!**`);
        message.guild.member(collected.first().author).addRole(rf)
        })
                  .catch(collected => {
                  message.author.send(`**Timeout, you need to try again!**`)
                              console.log('[Typing] Error: No one type the captcha code.');
                  console.log(collected)

                })
    
    fs.writeFile("./verify.json", JSON.stringify(verifyj), (err) => {
        if (err) console.error(err)
      })
    })
}});


client.login(tokenfile.token);