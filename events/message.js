const Discord = require('discord.js');
 exports.run = async(client, message) => {

  //const PREFIX='_';
  if(message.author.bot)return;
  if(!message.content.startsWith(process.env.PREFIX)) return;
  // Get the command by getting the first part of the message and removing  the prefix.
  var command = message.content.split(" ")[0].slice(process.env.PREFIX.length);
  // Get the params in an array of arguments to be used in the bot

  var params = message.content.split(" ").slice(1);
  // run the `elevation` function to get the user's permission level

  let cmd;
  // Check if the command exists in Commands
  if (client.commands.has(command)) {
    // Assign the command, if it exists in Commands
    cmd = client.commands.get(command)
  // Check if the command exists in Aliases
  } else if (client.aliases.has(command)) {
    // Assign the command, if it exists in Aliases
    cmd = client.commands.get(client.aliases.get(command));
  }

  if(cmd) {
       // Run the `exports.run()` function defined in each command.
    cmd.run(client, message, params);
  }
}
