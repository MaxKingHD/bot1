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



    if (msg.author.id != client.user.id) {
        
            card3 = Math.floor(Math.random() * 13);
            if (card3 >= 10) {
                card3 = 10;
                c3f[Math.floor(Math.random() * 3)];
                msg.channel.send("**You pulled a **" + c3f[Math.floor(Math.random() * 3)] + "** and had **" + total);
                total += card3;
            } else {
                msg.channel.send("**You pulled a **" + cardNums[card3] + "** and had a total of **" + total);
                total = total + 1 + card3
            }
            msg.channel.send("**Your new Total is **" + total);
            if (total > 21) {
                msg.channel.send("**Bust!**");
                game = false;
            }
        }
    }


  
  

module.exports.help = {
  name: "hit"
}