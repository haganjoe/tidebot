exports.run = async(client,messageReaction,user)=>{
console.log(messageReaction.emoji.name)
  if(messageReaction.message.channel.id==='651256100728864793'){

    switch(messageReaction.emoji.name){
      case 'tide':
      var role = messageReaction.message.guild.roles.get('650877455854338077');
      messageReaction.message.guild.member(user).addRole(role).catch(console.error);
      break;
      case '🦖':
      var role = messageReaction.message.guild.roles.get('669178125887733760');
      messageReaction.message.guild.member(user).addRole(role).catch(console.error)
      break;

    }

  }
}
