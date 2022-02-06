
//The latest discord.js version has some functional issues so i'd recommend instead installing version 12 [npm i discord.js@12.5.3]

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Connected as... ' + client.user.tag);
    

    //Bots current status
    client.user.setActivity('... with Fellow Gamers'); 


    //View All Conneted servers
    client.guilds.cache.forEach((guild) => {
        console.log(guild.name);

    //All the channels interacting with the bot 
    guild.channels.cache.forEach((channel) => {
        console.log(` - ${channel.name} | ${channel.type} | ${channel.id}`);
    });
        
    });
    //Using channel id (text): 939545230833762335

        //sending DMs 
       const dm = 'Greetings human..., heres something to light up your day:';
       const thechannel = client.channels.cache.get('939545230833762337');
        
        //Sending attachment
        const AttachImageOrGif = new Discord.MessageAttachment('https://www.dreamstime.com/funny-dog-vacation-hammock-siwth-sunglasses-head-flowers-little-image125195988');
        thechannel.send(dm, AttachImageOrGif);
});

//initial responce to dms
client.on('message', (recievedMessage) => {
    
    if(recievedMessage.author== client.user) {
       return;
    }
    recievedMessage.channel.send('Message recieved ✔️\n\n' + recievedMessage.author.toString() +' : ' +
    recievedMessage.content);


     if(recievedMessage.content.startsWith('!')) {
        processCommand(recievedMessage);
    };
   
    //commands for the bot
});

function processCommand(recievedMessage){
    let fullCommand = recievedMessage.content.substr(1);
    let splitCommand = fullCommand.split(' ');
    let primaryCommand = splitCommand[0];
    let arguments = splitCommand.slice(1);

    if(primaryCommand == 'help'){
        helpCommand(arguments, recievedMessage);
    }
    else if(primaryCommand == 'fortnite'){
        fortniteCommand(arguments, recievedMessage)
            recievedMessage.channel.send('Message not specific, type !help [topic] for help.');
    }
    else{
        recievedMessage.channel.send('Message ');
    }
}

function fortniteCommand(arguments, recievedMessage) {
    if(arguments.length < 2){
        recievedMessage.channel.send('Message too vague!');
        return;
    }
    recievedMessage.channel.send('Fore more: https://www.facebook.com/FortniteGame/')
}

function helpCommand(arguments, recievedMessage) {
    if(arguments.length == 0){
        recievedMessage.channel.send('Nothing found on that, to get Assistant type !help with...')
    }
    else{
        recievedMessage.channel.send('Seems you need help with, ' + arguments);
    }   
}
//your discord bot's secret token (slightly modied for security) 
 client.login("wer345KI8NDFGKJ5h.Yf6aeg.8QZ0HcMDF7w5GQBpl3ZdM6aRK-U");
 