exports.run = async(client,message,args)=>{
    if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");
	  await message.delete().catch(O_o=>{});
      var clanName='';
      var i=1;
      if(args[args.length-4] === "sub"){
      for(i=1;i<args.length-8;i++){
        clanName+=args[i]+' ';
      }
      var registerMessage = 'Team Slot '+args[0]+
                            '\nClan: ('+clanName+
                            ')\nTeam Leader: '+args[args.length-8]+
                            '\n2): '+args[args.length-7]+
                            '\n3): '+args[args.length-6]+
                            '\n4): '+args[args.length-5]+
                            '\nSub 1: '+args[args.length-3]+
                            '\nSub 2: '+args[args.length-2]+
                            '\nSub 3: '+args[args.length-1]
      }else{
      for(i=1;i<args.length-4;i++){
        clanName+=args[i]+' ';
      }
      var registerMessage = 'Team Slot '+args[0]+
                            '\nClan: ('+clanName+
                            ')\nTeam Leader: '+args[args.length-4]+
                            '\n2): '+args[args.length-3]+
                            '\n3): '+args[args.length-2]+
                            '\n4): '+args[args.length-1]
      }
    client.channels.get('686735096740708422').send(registerMessage)
}

exports.help={
	name : "squads",
  description: "Register a squad for tournament",
  aliases: ["sq","sqd"],
  usage: process.env.PREFIX+"squads/alias <team slot> <clan name> <user 1> <user 2> <user 3> <user 4> sub(optional) <user1> <user2> <user3>",
  permissions:true
}
