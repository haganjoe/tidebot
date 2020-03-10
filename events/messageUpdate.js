const Discord = require('discord.js')
exports.run = async (client,oldmessage,newmessage)=>{
    if(oldmessage.author.bot) return;
    if(oldmessage.content === newmessage.content) return;
   let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**EDIT MESSAGE**")
  .setColor("#0099ff")
  .setAuthor(newmessage.author.tag,newmessage.author.avatarURL)
  .addField("Channel", oldmessage.channel)
  .addField("Before", oldmessage.content)
  .addField("After", newmessage.content)
  .setTimestamp()
  .setFooter(`Author ID: ${newmessage.author.id}`);
  let message = newmessage.guild.channels.get('686992873463218206')
  message.send({embed:DeleteEmbed});
 
}
