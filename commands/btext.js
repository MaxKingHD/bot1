exports.run = (client, message, args) => {
  message.delete();
    
        const split = args.join(' ').split(''); // ['ab', 'cd'] -> ['a','b','c','d']
        const blocktext = split
            .map(v => v.match(/\w/) ? `:regional_indicator_${v.toLowerCase()}:` : v)
            .slice(0, 90).join(''); // 2000 / 22 = ~90
        return message.channel.send(blocktext.slice(0, 1999));
   

}
 module.exports.help = {
        name: "btext"
 }