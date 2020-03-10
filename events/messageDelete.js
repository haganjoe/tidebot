const Discord = require('discord.js')
exports.run = (client,messageDeleted)=>{
   if(messageDeleted.author.bot) return;
   if(messageDeleted.channel.id === '664944881529258024'){
   client.channels.get('664944881529258024').send(messageDeleted.content+',('+messageDeleted.author+')')

   }
   let DeleteEmbed = new Discord.RichEmbed()
  .setTitle("**DELETED MESSAGE**")
  .setColor("#0099ff")
  .setAuthor(messageDeleted.author.tag,messageDeleted.author.avatarURL)
  .addField("Channel", messageDeleted.channel)
  .addField("Message", messageDeleted.content)
  .setTimestamp()
  .setFooter(`Author ID: ${messageDeleted.author.id}`);
  let message = messageDeleted.guild.channels.get('686992873463218206')
  message.send({embed:DeleteEmbed});
}
