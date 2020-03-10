const Discord = require("discord.js")
exports.run = async(client, message, args) => {
  let mod=false
 if(message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
  mod=true
 const exampleEmbed = new Discord.RichEmbed()
  .setColor('#0099ff')
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')

  .setThumbnail('https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter('Developed by Tide Gaming', 'https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128');
  if(args.length<=0){
    client.commands.forEach((cmd)=>{
      if(cmd.help.name !== "help"){
        if(cmd.help.permissions){
          if(mod){
            exampleEmbed.addField("✅`"+cmd.help.name+"`",cmd.help.description,true)
          }
          else
            exampleEmbed.addField("❌`"+cmd.help.name+"`",cmd.help.description,true)
      }
      else
        exampleEmbed.addField("✅`"+cmd.help.name+"`",cmd.help.description,true)
      }
    })
  }
  else{
    let hlp = client.commands.get(args[0])

    exampleEmbed.addField('Name',hlp.help.name,true)
    exampleEmbed.addField('Description',hlp.help.description,true)
    exampleEmbed.addField('Aliases',hlp.help.aliases,true)
    exampleEmbed.addField('Usage',hlp.help.usage,true)
  }
message.channel.send(exampleEmbed);

}
exports.help = {
  name : "help",
  description: "Command Description",
  aliases: ["h"],
  usage: "command <argument>"
};
