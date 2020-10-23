const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix;

 console.log(`➢Bot bot artık aktif!`);
  console.log(`➢komutlar yüklendi!`);
  console.log(`《kod yapımcısı: Rixnux code(ı'm lord#5752)》`);

module.exports = async bot => {

  var oyun = [
     
    "sunucuyu",
    "prefixim r!",
  
    
    
    
    

  ];

  setInterval(async () => {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    bot.user.setActivity(oyun[random], { type: "WATCHING" });
  }, 12000);
  bot.user.setStatus("dnd");
  //});
  //});
};
