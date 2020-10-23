const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const fs = require("fs");
exports.run = (client, message, params, args) => {
  var Random = [
    ` ➥ **${client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ``}** kullanıcıya hizmet veriyorum. \n ➥ **${client.guilds.size}** sunucuya hizmet veriyorum. \n ➥ **${client.channels.size}** adet kanala hizmet veriyorum. \n ➥ pingim **${client.ping}**. `,
    
 
  ];
  var pre = Math.floor(Math.random() * Random.length);
 
      const ozelmesajkontrol = new Discord.RichEmbed()
      .setColor(0x00ae86)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setDescription("Dm`ni Kontrol Edermisin ?:postbox:");
    message.channel.sendEmbed(ozelmesajkontrol);
  
  const Rixnux = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setTitle("**♛ Bot Bilgilendirme ♛**")
    .setDescription(`${Random[pre]}`)
    .setFooter(`${client.user.username}`, client.user.avatarURL);
  return message.author.sendEmbed(Rixnux);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "bilgilendirme"
};

exports.help = {
  name: "bilgi",
  description: "bilgi",
  usage: "bot bilgi verir",
  kategori: "bilgi"
};