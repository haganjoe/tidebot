exports.run = async(client,message,args)=>{
	 if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");
	  const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{});
    // And we get the bot to say the thing:
    message.channel.send(sayMessage);
}
exports.help = {
  name : "say",
  description: "Make the bot say a message",
  aliases: ["speak","bark","echo"],
  usage: process.env.PREFIX+"say/alias <message>",
  permissions:true
};
