exports.run = async(client,message,args)=>{
	 const pollMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(pollMessage).then(function(message){
      message.react("👍");
      message.react("👎");
      message.react("🤷");
      // message.react(client.emojis.find(emoji => emoji.name === ":-1:"));
    }).catch(c=>console.log(c));
}
exports.help = {
  name : "poll",
  description: "Makes a poll with default reactions",
  aliases: ["vote"],
  usage: process.env.PREFIX+"poll/alias <message>",
  permissions:false
};