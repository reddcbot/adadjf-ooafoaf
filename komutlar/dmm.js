const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "674261557571616771") return message.reply('⚠ Uyarı ⚠', 'Bunu Sadece Sahibim Kullanabilir');
  
  if (!message.guild) {
  const ozelmesajuyari = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL)
  .addField('⚠ Uyarı ⚠', 'Bu komutu özel mesajlarda kullanamazsın.');
  return message.author.sendEmbed(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndericem onuda yazı ver.');//sa
  if (message.mentions.users.size < 1) return message.reply('Kime Mesaj atacam onuda yazı ver.').catch(console.error);
  message.delete();
  message.reply('✔️ Başarılı ✔️', 'Mesajını Gönderdim.')
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setTitle(`**Sahibimden Bir Mesajın Var**`)
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};




exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dy','dm'],
  permlevel: 4
};

exports.help = {
  name: 'dm',
  description: 'Seçtiginiz kişiye mesaj yollar. | r!dmdenyaz <@mesajın gidecegi kişi ıd> mesajın.',
  usage: 'dmdenyaz'
};