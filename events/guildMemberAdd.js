

exports.run = async (client,member,invites) => {


	  member.guild.fetchInvites().then(guildInvites => {


    const ei = client.invites.get(member.guild.id);
      guildInvites.forEach(inv=>{
      	if(ei.has(inv.code)){
      		console.log("has condition")
    	if(ei.get(inv.code).uses < inv.uses){
    		console.log(inv.inviter.username)
    		const logChannel = member.guild.channels.get('687008391205617680')
    // A real basic message with the information we need.
    logChannel.send('`'+member.user.tag +'` joined using invite code '+inv.code
    				+' from `'+inv.inviter.username+'`. Invite was used '+
    				inv.uses+' times since its creation.');
    	}

    	console.log(inv.code+" "+inv.uses +" "+ ei.get(inv.code)+" "+ei.get(inv.code).uses)
    }
    else{

    	console.log("doesnt have condition")
		if(inv.uses>0){
    	console.log(inv.inviter.username)
    		const logChannel = member.guild.channels.get('687008391205617680')
    // A real basic message with the information we need.
    logChannel.send('`'+member.user.tag +'` joined using invite code '+inv.code
    				+' from `'+inv.inviter.username+'`. Invite was used '+
    				inv.uses+' times since its creation.');
	}
    }
    })
    // Update the cached invites for the guild.

    client.invites.set(member.guild.id,guildInvites);

});

  const msg = "Welcome to Tide Gaming! Please read our rules carefully and head over to "+
  member.guild.channels.get('651256100728864793')+" to tell us which game you are from!"

    member.guild.channels.get('674624861858955284').send(msg);

	//THIS IS TO ADD A DEFAULT ROLE TO THE USER
// var role = member.guild.roles.get('686877710080933889');
// member.addRole(role).catch(c=>console.log(c));
}
