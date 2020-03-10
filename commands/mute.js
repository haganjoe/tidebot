const Discord = require('discord.js')
exports.run = async(client,message,args)=>{
	 if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot mute this user! Do they have a higher role? Do I have mute permissions?");
     var role = member.guild.roles.get('687002805591998511');
     let time = args.slice(1).join(' ');
    if(!time) {

    member.addRole(role).catch(c=>console.log(c));
      const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" muted successfully")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128');
  message.channel.send({embed:exampleEmbed});

  }
    else{
      member.addRole(role).catch(c=>console.log(c));
      const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" muted successfully for "+time+" minutes!")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/avatars/662348511144181765/38830e1d19cd1f916b4bbfce3053cc73.webp?');
  message.channel.send({embed:exampleEmbed});
      setTimeout(()=>{
        if(member.roles.has(role.id)){
    member.removeRole(role).catch(c=>console.log(c));

     const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" unmuted successfully")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/avatars/662348511144181765/38830e1d19cd1f916b4bbfce3053cc73.webp?');
  message.channel.send({embed:exampleEmbed});
     }
     else{
       const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" was already unmuted")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/avatars/662348511144181765/38830e1d19cd1f916b4bbfce3053cc73.webp?');
  message.channel.send({embed:exampleEmbed});
     }
      },parseInt(time)*60*1000);
    }


}

exports.help = {
  name : "mute",
  description: "Mutes the user",
  aliases: ["stfu","silent"],
  usage: process.env.PREFIX+"mute/alias <user> <time in minutes(optional)>",
  permissions:true
};
