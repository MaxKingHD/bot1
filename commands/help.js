const Discord = require("discord.js");
const client = new Discord.Client();
const botconfig = require("../botconfig.json")


  

var maincommands = [
  "avatar @Someone - Will get the users avatar.",
  "botinfo - You will get all bot information. ",
  "checkinvites - You will get invites by a user game.",
  "createinvite - You will get an invite link through DM's.",
  "currency [EUR] [USD] [Amount] - You will get converted USD/RUB/MDL/RON etc from EURO.",
  "discrim [#7777] - You will get nickname for user with #7777.",
  "embed [text] - Will send a embed with [text].",
  "getchannels - Will show you all channels (VOICE/TEXT).",
  "google [query] - Will do a google search and you will get direct link in chat.",
  "googleimg [query] - Will do a google search for an image and you will get direct link in chat.",
  "hastebin - You can post own script/code directly on hastebin.",
  "help - Bot will dm you a link with all of the commands.",
  "hex [ORANGE] - You will get hex code of requested color.",
  "info - You will get some info about server/bot etc.",
  "invite - Will generate invite link for bot/you will can invite bot to your server.",
  "issue [text] - You can report any bot bugs.",
  "leaderboard - You will get invites leaderboard on own server.",
  "lmgtfy [query] - Will do a search.",
  "math [8*8] - You will get result of any exercise.",
  "mdn [text] - Bot will search mdn (mozilla-developer-network) for an answer.",
  "membercount - Bot will fetch the member/bot count.",
  "messages - You will get number of your typed messages on server.",
  "pastebin - You can post own script/code directly on pastebin.",
  "ping - You will get your local ping.",
  "reddit - Will send you random reddit post.",
  "reminder [minutes] [text] - Will send you a reminder for [text] in [time].",
  "report - You can report a user for any reason.",
  "rolecolor - You will get role name 'RoleColor' with requested color.",
  "say - Bot will say you typed text.",
  "security - Will show moderation level security of the server.",
  "serveremojis - You will get the server emojis.",
  "serverroles - You will get the server roles."
]
  var maincommands2 = [
  "shortenurl - You will get a shorted URL.",
  "sinfo - You will get server information.",
  "size - Will show number of servers/users where the bot is connected.",
  "spotify - You will get spotify stats/listened track etc.",
  "suggestion - You will give a suggestion!",
  "translate - Will translate a text.",
  "uptime - Running time of the bot from the last refresh.",
  "userinfo - Will show any user info.",
  "weather - You will get weather for a location.",
  "whisper [@user] [text] - Bot will send a dm with your text to mentioned user.",  
 ]
var moderationcommands = [
    "ban @Someone [reason] - Will ban that user from the server.",
    "bans - Will show all bans for this server.",
    "clear [amount] - Will delete messages.",
    "kick @Someone [reason] - Will kick the user with [reason].",
    "mute @Someone [minutes] [reason] - Will mute that user from the server for the time. ",
    "nick [@user] [nickname] - Will set a new nickname for mentioned user.",
    "role add/remove [@user] Member - Will add/remove Member role for a user.",
    "roleall [rolename] - Will give all users the role you specified.",
    "softban @Someone [time] [reason] - Will softban that user from the server for a period of time.",
    "unban @Someone [reason] - Will unban that user from the server.",
    "unmute @Someone [reason] - Will unmute that user."
] 
var funcommands = [
    "8ball [question] - Bot will respond with a random 8ball response.",
    "advice - Bot will send some random advice.",
    "blackjack - Will start blackjack [!hit, !stay, !shop, !credits] !!!temporarily disabled!!!.",
    "btext [text] - Will block your typed text.",
    "choose [choice1] [choice2] - Bot chooses between 2 options you provide.",
    "cleverbot - Clever Bot [!!temporarily disabled!!]",
    "compare - Will compare 2 items.",
    "compliment [@Someone] - Will compliment mentioned user.",
    "dice - You will roll a dice.",
    "draw - You will draw a paper!",
    "fcookie - You will get a message from a fortune cookie!",
    "flipcoin tails/heads - Will flip a coin.",
    "fortnite <epic-username> [platform pc/xbl/psn] {mode all/season} - fortnite stats.",
    "guess - You will start a guessing game!",
    "hug @Someone - Will send a image hugging that user.",
    "idk - I don't know, try to see bot message!",
    "kiss @Someone - Will send a image kissing that user.",
    "lol - Will display League Of Legends Game Stats.",
    "lottery - You have a chance from 1 to 100 to win this game!",
    "meme - Bot will send you a random trending meme from r/dankmemes.",
    "minesweeper <rows> <columns> <mines> - Will create a minesweeper game!",
    "motivate - Will send you a motivation message.",
    "ow - Will display OverWatch Game Stats.",
    "pat @Someone - Will send a image patting that user.",
    "pee - Will show your pee machine size.",
    "pick - Will pick a random item from 2 typed items.",
    "poke @Someone - Will send a image poking that user.",
    "punch @Someone - Will send a image punching that user.",
    "purerate - Will show your/mentioned user's purity.",
    "reverse [text] - Will reverse your text.",
    "roast - Bot will roast the user you tag.",
    "roblox [query] - Will search for a user on roblox.",
    "rocketleague [platform pc/psn/xbl] <id> - rocketleague stats.",
    "roll [number] - Will roll a random number.",
    "rps - rock/paper/scissors.",
    "rr - Will play russian roulette.",
    "sexyrate - Bot will rate your sexyness from 1 to 100.",
    "ship [text] [text] - Will ship you/item with another user/item.",
    "slots - Play a game of slots.",
    "tableflip - Will flip a table!",
    "tackle @Someone - Will send a image tackle that user.",
    "textflip [text] - Flips text upside down.",
    "trivia - Will start a trivia game!",
    "xo @You @Someone - Will start TicTacToe game! !!! In working right now !!! (Do not use)."
]
var owner = [
  "antiraid [minutes] - Will disable the default role to send messages.",
  "announce - Will place an anno message!",
  "gstart - Will start a giveaway!",
  "lockdown - Will lock a channel for default role users.",
  "poll - You will create a poll."
]
var developer = [
  "dm - DM a user with bot updates etc.",
  "eval - Evaluating machine.",
  "hackban [userid] - Ban a user which is not in current server.",
  "unhackban [userid] - Unban a user which is not in current server.",
  "refresh - 4 Aces refresh/update.",
  "status [query] - Will change bot status."
]
var nsfwcommands = [
    "4k - Will send a full hd NSFW image.", 
    "amateur - Will send a random spicy girl NSFW image.",
    "ass - Will send a random NSFW image with ass.",
    "boobs - Will send a random NSFW image with boobs.",
    "gif - Will display a random NSFW gif.",  
    "hentai - Sends a random hentai picture.",
    "nsfw - Sends a random NSFW content.",
    "nsfwcoin [tails/heads] - Will flip a NSFW coin.",
    "pussy - Will send a random NSFW image with pussy."
]
var musiccommands = [
    "play [name] - Will display 10 songs from youtube.",
    "search [link] - Will play a song by link.",
    "skip - Will skip the current song.",
    "queue - Will say the current queue.",
    "volume [1-200] - Will change the volume.",
    "pause - Will pause the current music.",
    "resume - Will resume the current music.",
    "leave - Bot will leave the voice channel."
]
exports.run = (client, message, args) => { 
  message.delete();
  
    let music = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "voice")
  let twerk = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "twerk")
  let geaz = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "dev")
  let moder = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "ban")
  let main = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "book")
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "crowned")
  let dice = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "dice")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")
  let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
  
     const prefixtouse = botconfig.prefix
     const embed10 = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(client.user.avatarURL)
        .setTitle("• Command " + prefixtouse + "help •")
	      .addField("• Usage •", prefixtouse + "help [number]")
        .addField("• Options •", `[${main}] - Main Commands [1] \n[${main}] - Main Commands [2] \n[${moder}] - Moderation Commands [3] \n[${dice}] - Fun Commands [4] \n[${verified}] - Owner Commands [5] \n[${geaz}] - Developer Commands [6] \n[${twerk}] - NSFW Commands [7] \n[${music}] - Music Commands [8]`)
        .setFooter(`Requested by ${message.author.tag}`, message.author.avatarURL);
     

        const numberpicked = parseInt(args[0])
        if (isNaN(numberpicked)) return message.channel.send(embed10)
        if (numberpicked === 1) {

            const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`[${main}] Main Commands [${main}]`)
            .setDescription(maincommands)
            message.author.send(embed).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
    } else if (numberpicked === 2) {
          const embed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`[${main}] Main Commands [${main}]`)
            .setDescription(maincommands2)
            message.author.send(embed).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 3) {
            const embed2 = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setTitle(`[${moder}] Moderation Commands [${moder}]`)
            .setDescription(moderationcommands)
            message.author.send(embed2).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 4) {
                const embed3 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(`[${dice}] Fun Commands [${dice}]`)
                .setDescription(funcommands)
                message.author.send(embed3).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 5) {
                const embed4 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(`[${verified}] Owner Commands [${verified}]`)
                .setDescription(owner)
                message.author.send(embed4).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 6) {
                const embed5 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(`[${geaz}] Developer Commands [${geaz}]`)
                .setDescription(developer)
                message.author.send(embed5).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 7) {
                const embed6 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(`[${twerk}] NSFW Commands [${twerk}]`)
                .setDescription(nsfwcommands)
                message.author.send(embed6).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
        } else if (numberpicked === 8) {
                const embed8 = new Discord.RichEmbed()
                .setColor("RANDOM")
                .setTitle(`[${music}] Music Commands [${music}]`)
                .setDescription(musiccommands)
                message.author.send(embed8).then(() => message.channel.send(`${green} **Commands have been sent to you in DMs.**`)).catch(() => message.channel.send(`${red} **There was a error dming you the command list, make sure you have allow dms from server members on.**`))
          } else {
            message.channel.send(`${red} **Did not select valid options!**`)
      } 
    
}
   
module.exports.help = {
  name: "help"
}