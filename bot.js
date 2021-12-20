
// Run dotenv
require('dotenv').config();

{ 
  var salt = ["Oh.... I see.", 
      "So that's how it is, uh?",
      "That's how it's going to be, is it?",
      "That's the way in which things are, eh?",
      "That be how it will, is it?",
      "Will it be how that is, huh?",
      "That be the way in which things be the way they are, is it?",
      "That's the way it's going to be, huh?"
      ];
      
  var bland = ["Things really do be like that, eh?", "It really do be like that sometimes, huh?", "It be"];

}

function randSalt() {
  var salts = salt.length;
  var num = Math.floor(Math.random()*salts);
  return salt[num];  
}

function randBland() {
  var blands = bland.length;
  var num = Math.floor(Math.random()*blands);
  return bland[num];  
}




const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});


// user sends message in chat
client.on('message', msg => {
    if (msg.content === '!salt') {
      msg.reply(randSalt());
    }
    if (msg.content === '!bland') {
      msg.reply(randBland());
    }
  });

client.login(process.env.DISCORD_TOKEN);
