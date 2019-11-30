var draw;
var draw1;
var draw2;
var players = [];
var credits = [];
var cardNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13"];
var royals = ["Jack", "Queen", "King"];
var card3 = Math.floor(Math.random() * 13);
var game = false;
var total = 0;
var c3f = ["10", "Jack", "Queen", "King"]; 

module.exports.run = async (client, msg, args) => {
  msg.delete();
  
let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen")

    if (msg.author.id != client.user.id) {
            msg.channel.send(`${green} **Starting new game!**`);
            if (!players.includes(msg.author.id)) {
      
                players.push(msg.author.id);
                credits.push(200);
            }
            credits[players.indexOf(msg.author.id)] -= 50;
            draw1 = Math.floor(Math.random() * 13);
            draw2 = Math.floor(Math.random() * 13);
            if (draw1 > 10) {}
            game = true;
            total = 0;
            msg.channel.send("**--Commands--**");
            msg.channel.send("**/hit** - draws new card to add to total");
            msg.channel.send("**/stay** - keeps current cards for final amount");

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
                msg.channel.send("**You pulled a **" + royals[(draw2) - 10] + "** and a **" + royals[(draw1) - 10] + "** for a total of 20**");

            } else if (draw1 > 9) {
                if (draw1 = 10) {
                    total = 1 + draw1 + draw2;
                } else if (draw1 = 11) {
                    total = draw1 + draw2;
                } else {
                    total = draw1 + draw2 - 1
                }
                msg.channel.send("**You pulled a **" + cardNums[draw2] + "** and a **" + royals[(draw1) - 10] + "** for a total of **" + total);

            } else if (draw2 > 9) {
                if (draw2 = 10) {
                    total = 1 + draw1 + draw2;
                } else if (draw2 = 11) {
                    total = draw1 + draw2;
                } else {
                    total = draw1 + draw2 - 1
                }
                msg.channel.send("**You pulled a **" + royals[(draw2) - 10] + "** and a **" + cardNums[draw1] + "** for a total of **" + total);

            } else {
                total = 2 + draw1 + draw2;
                msg.channel.send("**You pulled a **" + cardNums[draw2] + "** and a **" + cardNums[draw1] + "** for a total of **" + total);
            }
        } else {
            msg.channel.send("**There is already a game in progress!**");
        }
    }

  
  

module.exports.help = {
  name: "blackjack"
}