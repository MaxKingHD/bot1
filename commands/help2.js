const Discord = require('discord.js');

exports.run = (client, message, args, tools) => {

    let pages = ['Uai pula shi ti beleshti?', 'ai dat de drecu!', 'Malakasos', 'vafla'];
    let page = 1;

    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setFooter(`Page ${page} of ${pages.length}`)
    .setDescription(pages[page-1])

    message.channel.send(embed).then(msg => {

        msg.react('➖').then( r => {
            msg.react('➕')

            const backwardsFilter = (reaction, user) => reaction.emoji.name === '➖' && user.id === message.author.id;
            const forwardsFilter = (reaction, user) => reaction.emoji.name === '➕' && user.id === message.author.id;

            const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 });
            const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });

            backwards.on('collect', r => {
                if (page === 1) return;
                page--;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)
            })
            forwards.on('collect', r => {
                if (page === pages.length) return;
                page++;
                embed.setDescription(pages[page-1]);
                embed.setFooter(`Page ${page} of ${pages.length}`);
                msg.edit(embed)

            })
        })
    })
}

 module.exports.help = {
    name: "help2"
}