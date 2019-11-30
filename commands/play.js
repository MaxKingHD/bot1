const search = require('yt-search');


exports.run = (client, message, args, ops) => {
  message.delete();
  
         let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let verified = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "verified")
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickgreen");
  
  search(args.join(' '), function(err, res) {
    
    if (err) return message.channel.send(`${red} **Something went wrong, try again please!** `);
    
    let videos = res.videos.slice(0, 10);
    
    let resp = '';
    
    for (var i in videos) {
      resp += `**[${parseInt(i)+1}]:** \`${videos[i].title}\`\n`;
      
    }
    
    resp += `\n **Please choose a number between \`1-${videos.length}\`.**`;
    
    message.channel.send(resp);
    
    const filter = m => !isNaN(m.content) && m.content < videos.length+1 && m.content > 0;
    
    const collector = message.channel.createMessageCollector(filter);
    
    collector.videos = videos;
    
    collector.once('collect', function(m){
      let commandFile = require('./search.js');
      commandFile.run(client, message, [this.videos[parseInt(m.content)-1].url], ops);
    
    
    
    });
 
  
  });


}

module.exports.help = {
  name: "play"
}