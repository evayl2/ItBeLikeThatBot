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
    var bland = ["Things really do be like that, eh?", "It really do be like that sometimes, huh?"]

}

function randSalt() {
    var num = Math.floor(Math.random()*8);
    return salt[num];  
  }

  function randBland() {
    var num = Math.floor(Math.random()*2);
    return bland[num];  
  }


var Discord = require('discord.io');

var logger = require('winston');

var auth = require('./auth.json');

// Configure logger settings

logger.remove(logger.transports.Console);

logger.add(new logger.transports.Console, {

colorize: true
});

logger.level = 'debug';

// Initialize Discord Bot

var bot = new Discord.Client({

token: auth.token,

autorun: true

});

bot.on('ready', function (evt) {

logger.info('Connected');

logger.info('Logged in as: ');

logger.info(bot.username + ' - (' + bot.id + ')');
});

bot.on('message', function (user, userID, channelID, message, evt) {

// Our bot needs to know if it will execute a command

// It will listen for messages that will start with `!`

if (message.substring(0, 1) == '!') {

    var args = message.substring(1).split(' ');

    var cmd = args[0];


    args = args.splice(1);

    switch(cmd) {

        // !ping

        case 'salty':

            bot.sendMessage({

                to: channelID,

                message: randSalt()

            });

        break;

        case 'bland': 
            bot.sendMessage({
                to: channelID,
                message: randBland()
            });
        break;

        // Just add any case commands if you want to..

     }

 }
});