exports.run = async(client,message,args)=>{

	 if(!message.member.roles.some(r=>["Tide Admin", "Tide Managers","CoDM Manager"].includes(r.name)) )
      return message.reply("wait what are you doing? We need mods in the server!");
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args);

    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");

    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}

exports.help = {
  name : "clear",
  description: "Clear the channel",
  aliases: ["c","del","purge"],
  usage: process.env.PREFIX+"clear/alias  <number between 2 - 100>",
  permissions:true
};
