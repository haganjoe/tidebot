const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();
client.db = new Discord.Collection();
client.invites = new Discord.Collection();
const invites = {};

// A pretty useful method to create a delay without blocking the whole script.
const wait = require('util').promisify(setTimeout);
fs.readdir("./commands/", (err, files) => {

    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + props.help.name)
        // let commandName = file.split(".")[0];
        client.commands.set(props.help.name, props);

        props.help.aliases.forEach(alias =>{
        	client.aliases.set(alias,props.help.name)

        })
    });
});
client.on("ready", () => {
   wait(1000);
   client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      client.invites.set(g.id,guildInvites)

    });
  });

  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);


  client.user.setPresence({ game: { name: 'over chats.',type:"Watching" }, status: 'online' })
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });

});


client.login(process.env.BOT_TOKEN)
