exports.run = async(client,message,args)=>{

    if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Please mention a valid member of this server");
    if(!member.kickable)
      return message.reply("I cannot kick this user! Do they have a higher role? Do I have kick permissions?");

    let reason = args.slice(1).join(' ');
    if(!reason) reason = "No reason provided";

    // Now, time for a swift kick in the nuts!
    await member.send("**Bye Felecia** ~ *Don’t let the :door: hit you on the way out*")
    await member.kick(reason)
      .catch(error => message.reply(`Sorry ${message.author} I couldn't kick because of : ${error}`));
    message.channel.send('**Bye Felecia** ~ *Don’t let the :door: hit you on the way out*')
    // message.reply(`${member.user.tag} has been kicked by ${message.author.tag} because: ${reason}`);

}
exports.help = {
  name : "kick",
  description: "Kicks the user",
  aliases: ["kick","k"],
  usage:process.env.PREFIX+"kick/alias <user> <reason (optional)>",
  permissions:true
};
