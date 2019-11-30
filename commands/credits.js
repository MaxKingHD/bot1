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
      
            msg.channel.send("**You currently have **" + credits[players.indexOf(msg.author.id)] + "**credits!**");
        } else {
            msg.channel.send("**You have not setup an account, use !blackjack to start a game and setup your account!**");
        }
    }



  
  

module.exports.help = {
  name: "credits"
}