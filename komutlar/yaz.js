const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`Bu komutu kullanman için \`Mesajları Yönet\` Yetkisine sahip olan gerek!`);
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.channel.send('Örnek kullanım: ``!yaz Merhaba!``')
  message.delete()
  
    const embed = new Discord.RichEmbed()
    

    message.channel.send(`${mesaj}`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
    

  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
      category: ''
};