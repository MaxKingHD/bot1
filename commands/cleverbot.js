const Discord = require("discord.js");
const client = new Discord.Client();
const Cleverbot = require('cleverio');
        const clevs = new Discord.Client({
            key: "",
            user: "",
            nick: ""
        });
exports.run = async (client, message, args) => {
  message.delete();
  
    try {
        clevs.create();
        const text = args.join(" ")
        const { response } = await clevs.ask(text);
        message.channel.send(response);
    } catch (err) {
        console.log(err)
    }
}
module.exports.help = {
  name: "cleverbot"
}