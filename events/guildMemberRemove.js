const Discord = require('discord.js')
exports.run =  async(client,member) => {
  const msg=member.user.tag+",has left the server \n"
    member.guild.channels.get('674624861858955284').send(msg)
  }
