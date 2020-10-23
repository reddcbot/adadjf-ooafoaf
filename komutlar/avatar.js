const Discord = require('discord.js');


exports.run = function(client, message) {

const chypercodeavatarım = new Discord.RichEmbed()

.setDescription(`**${message.author.username} İşte Avatarın**`)
.setImage(`${message.author.avatarURL} `)
.setTimestamp()

message.channel.send(chypercodeavatarım)
};

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['a', 'pp'],
  permLevel: 0 
};

exports.help = {
  name: 'avatar', 
  description: 'Avatarınızı Gösterir',
  usage: 'c!avatarım'
};