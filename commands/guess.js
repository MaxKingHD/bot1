const discord = require('discord.js');



module.exports.run = async (client, message, args) => {
  message.delete();
  
   let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred")
    let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
    let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green")


    var result = Math.floor(Math.random() * 10) + 1;
    //console.log(message.author.username + ": " + result);

    let iEmbed = new discord.RichEmbed()
    .setTitle("• Instructions •")
    .setColor("RANDOM")
    .addField("• You have ``3 guesses`` to try and guess the number I am thinking of. \n• The number is between 1 and 10. \n• Be sure to type your answer in chat as a VALID NUMBER.", "You can type ``end`` to stop at any given time, or type ``hint`` (only once tho) to know if your previous guess was either too high or too low.")
    .setFooter("Guessing starts now!");
    message.channel.send(iEmbed)

    const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {max: 1}).then(collected => {

        if(collected.first().content.toLowerCase() === "end"){ //if user types in end, the game ends
            return message.channel.send(`${red} **You decided not to play.**`);
        }

        var userA = collected.first().content; //defining their first guess as userA
        if(collected.first().content.toLowerCase() === "hint") return message.channel.send(`${red} **Well you need to guess a number before I can give you a hint.**`);

        
        if(userA == result){ //if their first guess was the answer, they got it right and game ends
            return message.reply(`**Good job u got it right. I was thinking of** ` + result);
        } else { //if not then they loose a guess and are left with the option of keep guessing or get a hint
            message.reply(`${red} **You got it wrong...2 more guesses and 1 more hint.**`)

            message.channel.awaitMessages(filter, {max: 1}).then(collected => { //setting the first thing they type in as an their input
                var userB = collected.first().content //second guess defined as userB

                if(collected.first().content.toLowerCase() === "end"){ //if user types in end, the game ends
                    return message.channel.send(`${red} **You decided not to play.**`);
                }

                //first time...you know have 2 more chances and 1 more hint

                //if you decide to use ur hint after u failed first time
                if(collected.first().content.toLowerCase() === "hint") {
                    if(userA > result){ //if the previous, userA, input was greater than the answer, then this code runs
                        message.reply(`${verified} **Your previous input of **` + userA + `** was too high.**`) //tells user than their userA input was too large
                        message.reply(`${verified} **Now you have 2 more guesses and 0 more hints.**`) //tells them they no longer have a hint

                        message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                            var userB = collected.first().content;
                            if(userB == result){ //if their second input, userB, is correct, bot tells them so
                                return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                            } else { //if userB was not correct, bot tells them they now have 0 hint and only 1 guess left
                                message.reply(`${red} **You got it wrong...1 more guess and 0 more hints.**`)
                            }

                        message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                            var userC = collected.first().content; //3rd and final guess...0 hints
                            if(userC == result){ //if their 3rd hint is correct. the bot will tell them so, vice versa
                                return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                            } else {
                                message.reply(`${red} **Rip you guessed all 3 wrong. I was thinking of the number** ` + result) //if userC, aka the last guess is incorrect, bot says so and game ends
                            }
                        }) //catch statement here for 2nd response

                        }) //catch statement here for the first response or aka the whole thing
                        //end of if user uses hint after 1st L, and their guess was bigger than the answer



                    } else {
                        message.reply(`${verified} **Your previous input of **` + userA + ` **was too low.**`) //bot sends this message if their previous guess was below the result
                        message.reply(`${verified} **Now you have 2 more guesses and 0 more hints.**`) //tells them that they used their hint and cant use it anymore

                        message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                            var userB = collected.first().content;
                            if(userB == result){ //if their 2nd guess, userB, is correct, bot says so, if not, bot also says so
                                return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                            } else {
                                message.reply(`${red} **You got it wrong...1 more guess and 0 more hints.**`) //now that they got 2 guesses wrong bot tells them they only have one more guess
                            }

                        message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                            var userC = collected.first().content;
                            if(userC == result){ //last guuess with 0 hints
                                return message.reply(`**Good job u got it right. I was thinking of** ` + result); //bot tells them they got it right
                            } else {
                                message.reply(`${red} **Rip you guessed all 3 wrong. I was thinking of the number** ` + result) //bot tells them they got it wrong
                            }
                        })

                        })
                        
                    } //end of if u use ur hint in the 2nd chance, regardless of if it was larger or smaller than the answer

                    //if u still havent used ur hint yet
                } else {
                    if(userB == result){ //if ur 2nd guess is equal to answer, bot will say so
                        return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                    } else { //if ur 2nd guess is not equal, bot will tell u so
                        message.reply(`${red} **You got it wrong...1 more guess and 1 more hint.**`)


                        message.channel.awaitMessages(filter, {max: 1}).then(collected => {

                            if(collected.first().content.toLowerCase() === "end"){ //if user types in end, the game ends
                                return message.channel.send(`${red} **You decided not to play.**`);
                            }

                            if(collected.first().content.toLowerCase() === "hint") { //if user uses hint command when they only have 1 chance left
                                if(userB > result){ //if their 3rd guess, userB, was larger than the answer
                                    message.reply(`${verified} **Your previous input of** ` + userB + ` **was to high!**`)
                                    message.reply(`${verified} **Now you have 1 more guess and 0 more hints!**`) //no longer have a hint and just 1 guess

                                    message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                                        var userE = collected.first().content; //last and final guess

                                        if(userE == result){ //if their last guess, userE, is the right number, bot will specify so
                                            return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                                        } else { //if not, user loses and game ends
                                            message.reply(`${red} **Rip you guessed all 3 wrong. I was thinking of the number **` + result)
                                        }
                                    }) //end of if user uses hint after 2nd L, and their guess was bigger than the answer



                                } else { //if their 3rd guess was smaller than the answer
                                    message.reply(`${verified} **Your previous input of **` + userB + `** was too low.**`) //tells them their second , userB, guess was too low
                                    message.reply(`${verified} **Now you have 1 more guess and 0 more hints.**`)

                                    message.channel.awaitMessages(filter, {max: 1}).then(collected => {
                                        var userE = collected.first().content; //last and final guess

                                        if(userE == result){ //if their last guess, userE, is the right number, bot will specify so
                                            return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                                        } else { //if not, user loses and game ends
                                            message.reply(`${red} **Rip you guessed all 3 wrong. I was thinking of the number** ` + result)
                                        }
                                    }) //end of if user uses hint after 2nd L, regardless if their guess was smaller of bigger than the answer




                                }
                            } else {
                                var userE = collected.first().content; //last and final guess and they still havent used their hint
                                if(userE == result){
                                    return message.reply(`**Good job u got it right. I was thinking of** ` + result);
                                } else {
                                    message.reply(`${red} **Rip you run out your attempts. The number was** ` + result + ` **. Next time you should use ur hints...they actually help!**`)
                                }
                            }
                        })
                    }
                }
            })
}
    })
    }

module.exports.help = {
    name: "guess"
}