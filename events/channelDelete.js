const Discord = require('discord.js')
exports.run = async(client,channel) => {
  let ChannelEmbed = new Discord.RichEmbed()
  .setTitle('**CHANNEL DELETED**')
  .setDescription(`**Channel Deleted: #${channel.name}** `)
  .setColor("#0099ff")
  .setAuthor('Tide Gaming','https://cdn.discordapp.com/icons/239932348357935104/dc80fa10f050a47bd80b339536ded85d.webp?size=128')
  .setTimestamp()
  .setFooter(`Developed by Tide Gaming`);
    client.channels.get('686992873463218206').send({embed:ChannelEmbed});

}
