const Discord = require('discord.js')
exports.run = async(client,message,args)=>{
	if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");

    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot mute this user! Do they have a higher role? Do I have mute permissions?");


    var role = member.guild.roles.get('687002805591998511');
     if(member.roles.has(role.id)){
    member.removeRole(role).catch(c=>console.log(c));

     const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" unmuted successfully")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128');
  message.channel.send({embed:exampleEmbed});
     }
     else{
       const exampleEmbed =new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTitle(member.user.tag+" is not muted")
  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128');
  message.channel.send({embed:exampleEmbed});
     }

}
exports.help = {
  name : "unmute",
  description: "Unmutes the user",
  aliases: ["unmute"],
  usage: process.env.PREFIX+"unmute/alias <user>",
  permissions:true
};
