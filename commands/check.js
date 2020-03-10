const Discord = require('discord.js')
exports.run = async(client,message,args)=>{
	let roleName = args.join(" ");
       if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");
    //Filtering the guild members only keeping those with the role
    //Then mapping the filtered array to their usernames
    if(!message.guild.roles.find("name", roleName))return;
    let membersWithRole = message.guild.members.filter(member => {
        return member.roles.find("name", roleName);
    }).map(member => {
        return member.displayName;
    })

    let roleEmbed = new Discord.RichEmbed({
        "title": `Users with the ${roleName} role`,
        "description": membersWithRole.join("\n"),
        "color": 0x0099ff
    });

    return message.channel.send({embed:roleEmbed});
}
exports.help={
  name : "check",
  description: "Lists all the users in a specified role",
  aliases: ["check","chk"],
  usage: process.env.PREFIX+"check/alias <role (without @)>",
  permissions:true
}
