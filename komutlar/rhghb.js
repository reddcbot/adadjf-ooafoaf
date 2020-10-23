const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(`<:no:663378512417128449> Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:x: Bir kanal belirlemedin? \n örnek kullanım:\`r!gkanal #kanal\``)
  if (args[0] !== 'ayarla' && args[0] !== 'kapat') return message.channel.send(`:X: Bir kanal belirlemedin? \n örnek kullanım:\`r!gkanal #kanal\``)
console.log('kod payımcısı:Rixnux code')
    if (args[0] == 'ayarla') {
  let hgkanali = message.mentions.channels.first();
  if (!hgkanali) return message.channel.send(':X:`Bir kanal belirlemedin? \n örnek kullanım:`r!gkanal #kanal`')
    db.set(`hgKanal_${message.guild.id}`, message.mentions.channels.first().id)
    let i = await db.fetch(`hgKanal_${message.guild.id}`)
     	  const embed = new Discord.RichEmbed()
  .setDescription(`:white_check_mark: **başarıyla giriş çıkış kanalı <#${i}> olarak ayarlandı!`)
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });
  } 

  if (args[0] == 'kapat') {
    
    let üye = await db.fetch(`hgKanal_${message.guild.id}`)
    if (!üye) return message.channel.send(`:x: Kapatman İçin HG-BB kanalını ayarlaman Lazım!.`)
    
    
    db.delete(`hgKanal_${message.guild.id}`)
    
	  const embed = new Discord.RichEmbed()
  .setDescription(``
    )
    .setColor("#F0C30D")
    .setTimestamp();
  message.channel.send({ embed });  }
console.log('kod payımcısı:Rixnux code')
};


exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['hgbbkanal','gkanal','giriş-kanal','girişkanal'],
 permLevel: 0
};

exports.help = {
 name: 'gkanal',
 description: 'Rixnux code <3',
 usage: 'gkanal'
};