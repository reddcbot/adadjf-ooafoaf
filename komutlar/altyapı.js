 const Discord = require('discord.js');

exports.run = function(client, message) {
 
  var role = message.guild.roles.find(role => role.id === "675333436998811658"); 
  if (message.member.roles.has(role.id)) return message.channel.send("<a:a6:689494738792873999> Zaten Altyapı rolüne sahipdin. <a:a6:689494738792873999>")
  message.member.addRole(role);

const embed = new Discord.RichEmbed()
.setTitle("<a:emoji_1:677444101519441932> Altyapı Aldın! <a:emoji_1:677444101519441932>")
.setColor("GREEN")
.setDescription("")



  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['altyapı'],
  permLevel: 0
};

exports.help = {
  name: 'altyapi',
  description: 'JavaScript kanallarına erişim sağlar.',
  usage: 'js'
};
