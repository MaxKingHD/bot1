exports.run = async (client, message, args, level) => {
  message.delete();
  
        var user = message.mentions.members.first(); //User
        var roleName = args.splice(2).join(' '); //Role Name
        var role = message.guild.roles.find('name', roleName); //Role Search
  
    let red = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "tickred");
  let green = client.guilds.get("608289298537775127").emojis.find(emoji => emoji.name === "green");


        switch (args[0]) {
            case 'add':
                if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${red} **You're missing MANAGE_ROLES permission!** `)
                if (!user) return message.reply(`${red} **Mention an user.** `); // I need User
                if (!roleName) return message.reply(`${red} **I need a role to give them.** `); //I need roleName
                if (!message.guild.roles.find('name', roleName)) return message.reply(`${red} **The role doesn't exist.** `);
                if (user.roles.exists('name', roleName)) return message.reply(`${red} **They already have the role.** `); //Already have role


                user.addRole(role).then(() => message.reply(`**I gave the role.**`)).catch((err) => message.reply(`${red} **An error appeared.** `).then(() => console.log(err)));
                break;
            case 'remove':
             
                if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`${red} **You're missing MANAGE_ROLES permission!** `)

                if (!user) return message.reply(`${red} **Mention an user.** `);
                if (!roleName) return message.reply(`${red} **I need a role to give them.** `);
                //console.log(user);
                //console.log(roleName);
                if (!message.guild.roles.find('name', roleName)) return message.reply(`${red} **The role doesn't exist.** `);

                if (!user.roles.find('name', roleName)) return message.reply(`${red} **The user doesn't have the role.** `);

                user.removeRole(role).then(() => message.reply(`**I removed the role.**`)).catch((err) => message.reply(`${red} **An error appeared.** `).then(() => console.log(err)));
                break;
            default:
                message.reply(`${red} **Use role remove/add <@user> <@role>** `);
        }
}
  module.exports.help = {
    name: "role"
  }