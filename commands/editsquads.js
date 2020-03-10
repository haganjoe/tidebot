exports.run = async(client,message,args)=>{
	await message.delete().catch(O_o=>{});
        let check ='Team Slot '+ args[0];

        message.channel.fetchMessages().then(msgs => { // Get messages to check
                 let msgDel = msgs.filter(msgss => msgss.author.bot) // Finds all messages with 'check'
                 let editmsg = msgDel.filter(msgss => msgss.content.includes(check))
                 let id=''
                 editmsg.map(msg => id=msg.id)
				 var clanName='';

		         if(args[args.length-4] === "sub"){
		         for(i=2;i<args.length-8;i++){
		           clanName+=args[i]+' ';
		         }
		         var registerMessage = 'Team Slot '+args[1]+
		                               '\nClan: ('+clanName+
		                               ')\nTeam Leader: '+args[args.length-8]+
		                               '\n2): '+args[args.length-7]+
		                               '\n3): '+args[args.length-6]+
		                               '\n4): '+args[args.length-5]+
		                               '\nSub 1: '+args[args.length-3]+
		                               '\nSub 2: '+args[args.length-2]+
		                               '\nSub 3: '+args[args.length-1]
		         }else{
		         for(i=2;i<args.length-4;i++){
		           clanName+=args[i]+' ';
		         }
		         var registerMessage = 'Team Slot '+args[1]+
		                               '\nClan: ('+clanName+
		                               ')\nTeam Leader: '+args[args.length-4]+
		                               '\n2): '+args[args.length-3]+
		                               '\n3): '+args[args.length-2]+
		                               '\n4): '+args[args.length-1]
		         }
		         message.channel.fetchMessage(id).then(msg=>msg.edit(registerMessage))
  });
}

exports.help = {
  name : "editsquads",
  description: "Edit a squad for scrims/tournaments",
  aliases: ["edsq","esquads"],
  usage: process.env.PREFIX+"editsquads/alias <team slot to edit> <new complete roster>",
  permissions:true
};
