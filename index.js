


const Discord = require('discord.js');
const client = new Discord.Client();

const testFolder = './creeper/';
const fs = require('fs');

var comandi = [];

fs.readdir(testFolder, (err, files) => {
  files.forEach(file => {
    comandi.push(file.substr(0,file.length-4));
  });
});

client.login('NjA3OTM0MDkyMjAxNDI2OTQ0.XUhZzA.Ftljl6atRlQiFo1jqXOpEa17J-c');

  



client.on('message', message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  console.log(message.author.username);
  
  if(message.author.username=="Francy1000")
  message.reply('Si ma stai calmo');

var msg=message.content.toLowerCase();
  function play(nome){

    if(comandi.includes(nome)){
    if(msg==nome){
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => { // Connection is an instance of VoiceConnection     
           connection.playFile('creeper/'+nome+'.ogg',{type: 'ogg/opus'});
          })
          .catch(console.log);
      } else {
        message.reply('Oh ma se ritardato?, dove minchia entro per farti ascoltare sto audio di merda? coglione');
      }
    }
  }
  }

  for(x of comandi)
    play(x);

  switch(msg){

    case "help":
      var str="";
      for(x of comandi)
        str+=x+"\n";
        
        message.channel.send(str);
    break;
    case "capito":
      message.reply('si');
    break;

    case "dc":
            if (message.guild.voiceConnection) {
                message.guild.voiceConnection.disconnect()
                  
              } else {
                message.reply('Se non mi metti in un canale da dove cazzo mi devo disconnettere dioporco');
              }
    break;



  }

           
});

