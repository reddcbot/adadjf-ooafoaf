/**/
// -------------------------------------------------------------
const http = require("http");
const keep_alive = require("./keep_alive.js");

http
  .createServer(function(req, res) {
    res.write("OK!");
    res.end();
  })
  .listen(8080);
//

const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
const fs = require("fs");
var prefix = ayarlar.prefix;
const db = require("quick.db");
require("./util/eventLoader")(client);
const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};













//-------------------------Sunucu Kur Komudu -----------------------//


client.on('message', async message => {
  const ms = require('ms');
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let u = message.mentions.users.first() || message.author;
  if (command === "sunucukur") {
  if (message.guild.channels.find(channel => channel.name === "Bot Kullanımı")) return message.channel.send(" Bot Paneli Zaten Ayarlanmış.")
  message.channel.send(`Bot Bilgi Kanallarının kurulumu başlatılsın mı? başlatılacak ise **evet** yazınız.`)
      if (!message.member.hasPermission('ADMINISTRATOR'))
  return message.channel.send("Bu Kodu `Yönetici` Yetkisi Olan Kişi Kullanabilir.");
      message.channel.awaitMessages(response => response.content === 'evet', {
        max: 1,
        time: 10000,
        errors: ['time'],
      })
    .then((collected) => {
   message.guild.createChannel('|▬▬|ÖNEMLİ KANALLAR|▬▬|', 'category', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])



        
 message.guild.createChannel('╠❗️╣kurallar', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
 message.guild.createChannel('╠🚪╣gelen-giden', 'text', [{
  id: message.guild.id,
  deny: ['SEND_MESSAGES']
}])
.then(channel =>
       channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
       message.guild.createChannel('╠🔸╣sayaç', 'text', [{
        id: message.guild.id,
        deny: ['SEND_MESSAGES']
      }])
.then(channel =>
             channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
             message.guild.createChannel('╠📃╣log-kanalı', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
            .then(channel => channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));
            message.guild.createChannel('╠📢╣duyuru-odası', 'text', [{
              id: message.guild.id,
              deny: ['SEND_MESSAGES']
            }])
.then(channel =>
 channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|ÖNEMLİ KANALLAR|▬▬|")));

       }) 
       .then((collected) => {
        message.guild.createChannel('|▬▬|GENEL KANALLAR|▬▬|', 'category', [{
       id: message.guild.id,
     }]);
             
        
             message.guild.createChannel(`╠💬╣sohbet`, 'text')
     .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

        
     message.guild.createChannel(`╠🤖╣bot-komutları`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));

        
      message.guild.createChannel(`╠💡╣şikayet-ve-öneri`, 'text')
     .then(channel =>
     
            channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));
     message.guild.createChannel(`╠📷╣görsel-içerik`, 'text')
     .then(channel =>
                  channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|GENEL KANALLAR|▬▬|")));


      message.guild.createChannel(`🏆》Kurucu Odası`, "voice")
      .then(channel =>
        channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
      .then(c => {
        let role = message.guild.roles.find("name", "@everyone");
        let role2 = message.guild.roles.find("name", "Kurucu");
        
        c.overwritePermissions(role, {
            CONNECT: false,
        });
        c.overwritePermissions(role2, {
            CONNECT: true,
            
        });
    })

    message.guild.createChannel('|▬▬|SES KANALLARI|▬▬|', 'category', [{
      id: message.guild.id,
    }]);

    message.guild.createChannel(`🏆》Yönetici Odası`, "voice")
    .then(channel =>
      channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
    .then(c => {
      let role = message.guild.roles.find("name", "@everyone");
      let role2 = message.guild.roles.find("name", "👑 ︴Sunucu Sahibi");
      let role3 = message.guild.roles.find("name", "⭐ ︴Yönetici");
      c.overwritePermissions(role, {
          CONNECT: false,
      });
      c.overwritePermissions(role2, {
          CONNECT: true,
      });
      c.overwritePermissions(role3, {
          CONNECT: true,
      });
  })

  message.guild.createChannel(`💬》Sohbet Odası`, "voice")
  .then(channel =>
    channel.setParent(message.guild.channels.find(channel => channel.name === "|▬▬|SES KANALLARI|▬▬|")))
  .then(c => {
    let role = message.guild.roles.find("name", "@everyone");
    c.overwritePermissions(role, {
        CONNECT: true,
      
      
      
      
      
    });
})




      message.guild.createRole({
        name: '👑 ︴Sunucu Sahibi',
        color: '#009eac',
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
        ]
      })

      
      message.guild.createRole({
        name: '⭐ ︴Yönetici',
        color: 'BLUE',
        permissions: [
            "ADMINISTRATOR",
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.createRole({
        name: '🛡️  ︴Moderator',
        color: '#015751',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

         message.guild.createRole({
        name: '📂 ︴ Projelerimiz',
        color: '00ffff',
            permissions: [
            "ADMINISTRATOR",
    ]
      })

             message.guild.createRole({
        name: '🌹︴Özel bot',
        color: 'RED',
            permissions: [
            "ADMINISTRATOR",
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })
        
        
      message.guild.createRole({
        name: '💋︴Özel Kişi',
        color: '#4e03b9',
      })

      message.guild.createRole({
        name: '✅ ︴Üyelerimiz',
        color: '#00bd26',
      })

      message.guild.createRole({
        name: '💻︴Botlar',
        color: 'ORANGE',
      })

       message.channel.send("Gerekli Odalar Kuruldu!")
     
            })   
    
}
});

//-------------------------Sunucu Kur Komudu SON-----------------------//

























//////////////////////////////////////////////reklamkivk
client.on("message", async message => {
    let uyarisayisi = await db.fetch(`reklamuyari_${message.author.id}`);
    let reklamkick = await db.fetch(`reklamkick_${message.guild.id}`)
    let kullanici = message.member;
    if (reklamkick == 'kapali') return;
    if (reklamkick == 'acik') {
        const reklam = ["discordapp","discord.app", "discord.gg", "invite", "discordapp", "discordgg", ".com", ".net", ".xyz", ".tk", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl", ".org", ".com.tr", ".biz", ".party", ".rf.gd", ".az",];
        if (reklam.some(word => message.content.toLowerCase().includes(word))) {
            if (!message.member.hasPermission("ADMINISTRATOR")) {
                message.delete();
                db.add(`reklamuyari_${message.author.id}`, 3) //uyarı puanı ekleme
                if (uyarisayisi === null) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (1/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)                
}
                if (uyarisayisi === 1) {
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> reklam kick sistemine yakalandın! Reklam yapmaya devam edersen kickleniceksin (2/3)`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 2) {
                    message.delete();
                    await kullanici.kick({
                        reason: `Reklam kick sistemi`,
                    })
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> 3 adet reklam uyarısı aldığı için kicklendi. Bir kez daha yaparsa banlanacak.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }
                if (uyarisayisi === 3) {
                    message.delete();
                    await kullanici.ban({
                        reason: `Reklam ban sistemi`,
                    })
                    db.delete(`reklamuyari_${message.author.id}`)
                    let uyari = new Discord.RichEmbed()
                        .setColor("RANDOM")
                        .setFooter('Reklam kick sistemi', client.user.avatarURL)
                        .setDescription(`<@${message.author.id}> kick yedikten sonra tekrar devam ettiği için banlandı.`)
                        .setTimestamp()
                    message.channel.send(uyari)
                }

            }
        }
    }
});
////////////////////////////////

















//reklam engel

client.on('message', async message => {
  let ke = await db.fetch(`reklam_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let reklam = ["discord.gg/", "https://", ".org", ".com", ".cf", ".tk", ".xyz"]
    if (reklam.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Reklam yapmak yasak kardeşim!")
        message.guild.owner.send("Sunucunuzda bir kişi reklam yaptı. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
     
  }
  
});
  
  
  
  
  
  







////küfür engel




client.on('message', async message => {
  let ke = await db.fetch(`kufur_${message.guild.id}`)
  
  if (ke === "kapali" || ke === undefined || ke === null){
    return;
  } else if (ke === "acik") {
    let küfür = ["aq", "amk", "ıq", "aw", "ıw","piç","pic","pıc","amq","sg","yavşak","orospu","oç","velet","nah","Aq","sik","am","amcık","sikik"]
    if (küfür.some(word => message.content.includes(word))){
        if (!message.member.hasPermission("BAN_MEMBERS")) {
        message.delete();
        message.channel.send("Küfür etmek yasak kardeşim!")
        message.guild.owner.send("Sunucunuzda bir kişi küfür etti. \nKullanıcı: "+ message.author.tag +" \nMesaj: **"+ message +"** ")
      }
    }
    
  }
})






//////////////////// BAN KORUMA

client.on("guildBanAdd", async (guild, user) => {
  const entry = await guild
    .fetchAuditLogs({ type: "MEMBER_BAN_ADD" })
    .then(audit => audit.entries.first());
  const yetkili = await guild.members.get(entry.executor.id);

  if (yetkili.id === "694877311681429514") return;

  let embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .setDescription(`<@${user.id}> kişisi banlandı`)
    .setTimestamp();
  let roles = guild.members.get(yetkili.id).roles.array();
  try {
    guild.members.get(yetkili.id).removeRoles(roles);
  } catch (err) {
    console.log(err);
  }
  setTimeout(function() {
    guild.members.get(yetkili.id).addRole("696011465055797319");

    guild.owner.send(embed);
  }, 1500);
});








/////////////////////////// BOT KORUMA

client.on('guildMemberAdd', (member) => {
    const guild = member.guild;

 let sChannel = member.guild.channels.find(c => c.name === 'guards')

    if(member.user.bot !==true){

    } 
    else {

    sChannel.send(`**Maximus Koruma Sistemi**
Sunucuya Bir Bot Eklendi Ve Güvenlik Nedeniyle Banlandı
Banlanan Bot: **${member.user.tag}**
@everyone`)
    .then(() => console.log(`yasaklandı ${member.displayName}`))
    .catch(console.error);
       member.ban(member) 
  }  
  });










client.on('guildMemberAdd', async (member) => {
  if(db.has(`${member.guild.id}_otorol`)) {
    var rolID = db.fetch(`${member.guild.id}_otorol`)
    member.addRole(rolID)
  } else {
    return;
  }
  if(db.has(`${member.guild.id}_otokanal`)) {
    var kanal = client.channels.get(db.fetch(`${member.guild.id}_otokanal`))
    const embed = new Discord.RichEmbed()
    .setDescription(`Yeni katılan ${member} kullanıcısına <@&${rolID}> rolü verildi`)
    .setTimestamp()
    kanal.send(embed)
  } else {
    return;
  }
})


















//----------Resimli Hoş geldin gözüşürüz----------\\
client.on("guildMemberRemove", async member => {
  let pasa = await db.fetch(`pasabilal${member.guild.id}`);

  let bilal = member.guild.channels.find("id", pasa);

  const ca = member.user.displayAvatarURL;
  var { createCanvas, loadImage } = require("canvas");
  var canvas = createCanvas(900, 450);
  var mlynstax = canvas.getContext("2d");
  loadImage(cassieload.adana).then(adana => {
    loadImage(ca).then(caa => {
      mlynstax.drawImage(adana, 0, 0, 900, 450);
      mlynstax.drawImage(caa, 350, 130, 200, 200);
      mlynstax.beginPath();
      mlynstax.beginPath();
      mlynstax.fillStyle = `#03fcfc`;
      mlynstax.font = "50px Oswald";
      mlynstax.textAlign = "left";
      mlynstax.fillText(`${member.user.tag}`, 280, 400);

      bilal.send(new Discord.Attachment(canvas.toBuffer(), "cıktınbro.png"));
    });
  });
});

var cassieload = {
  adana:
    "https://cdn.discordapp.com/attachments/676052036734812170/676063512753340426/download.gif",
  bursa:
    "https://cdn.discordapp.com/attachments/676052036734812170/676062624336838676/download.gif"
};

//fake ayrıl katıl
client.on("message", async message => {
  if (message.content === "r!fakegir") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberAdd",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});
client.on("message", async message => {
  if (message.content === "r!fakeçık") {
    // - yerine prefixi yaz
    client.emit(
      "guildMemberRemove",
      message.member || (await message.guild.fetchMember(message.author))
    );
  }
});




client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

const DBL = require("dblapi.js");
const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NTIzMjYzMzUyOTM2ODU3NiIsImJvdCI6dHJ1ZSwiaWF0IjoxNTgxMDA5ODg0fQ.ZrLr1fZZ6m6iBmD_66N4rqeQ9fmtrV7pnLoc8IfVe_c', client);

// Optional events
dbl.on('posted', () => {
  console.log('Server count posted!');
})

dbl.on('error', e => {
 console.log(`Oops! ${e}`);
})
client.on("guildBanAdd", async (guild, user) => {
  let kontrol = await db.fetch(`dil_${guild.id}`);
  let kanal = await db.fetch(`bank_${guild.id}`);
  let rol = await db.fetch(`banrol_${guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    if (!rol) {
      guild.unban(user.id);
      guild.members.get(entry.executor.id).kick();
      const embed = new Discord.RichEmbed()
        .setTitle(`Biri Yasaklandı!`)
        .setColor("BLACK")
        .addField(`Yasaklayan`, entry.executor.tag)
        .addField(`Yasaklanan Kişi`, user.name)
        .addField(
          `Sonuç`,
          `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
        );
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limido_${entry.executor.id}`);
        let slimito = await db.fetch(`slimido_${guild.id}`);
        if (slimito == limito || slimito > limito) {
          db.delete(`limido_${entry.executor.id}`);
          guild.unban(user.id);
          guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`Biri Yasaklandı!`)
            .setColor("BLACK")
            .addField(`Yasaklayan`, entry.executor.tag)
            .addField(`Yasaklanan Kişi`, user.name)
            .addField(
              `Sonuç`,
              `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!\nNOT: LİMİTİ AŞTI!`
            );
          client.channels.get(kanal).send(embed);
        } else {
          db.add(`limido_${entry.executor.id}`, +1);
          const embed = new Discord.RichEmbed()
            .setTitle(`Biri Yasaklandı!`)
            .setColor("BLACK")
            .addField(`Yasaklayan`, entry.executor.tag)
            .addField(`Yasaklanan Kişi`, user.name)
            .addField(
              `Sonuç`,
              `Yasaklayan kişi ${limito}/${slimito} sınırına ulaştı!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        guild.unban(user.id);
        guild.members.get(entry.executor.id).kick();
        const embed = new Discord.RichEmbed()
          .setTitle(`Biri Yasaklandı!`)
          .setColor("BLACK")
          .addField(`Yasaklayan`, entry.executor.tag)
          .addField(`Yasaklanan Kişi`, user.name)
          .addField(
            `Sonuç`,
            `Yasaklayan kişi sunucudan açıldı!\nve yasaklanan kişinin yasağı kalktı!`
          );
        client.channels.get(kanal).send(embed);
      }
    }
  }

  ///////////////////////////////////////







  else {
    const entry = await guild
      .fetchAuditLogs({ type: "GUILD_BAN_ADD" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == guild.owner.id) return;
    if (!rol) {
      guild.unban(user.id);
      guild.members.get(entry.executor.id).kick();
      const embed = new Discord.RichEmbed()
        .setTitle(`One Banned!`)
        .setColor("BLACK")
        .addField(`Banner`, entry.executor.tag)
        .addField(`Banned Person`, user.name)
        .addField(
          `Sonuç`,
          `The ban has been opened from the server!\nand the ban has been lifted!`
        );
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limido_${entry.executor.id}`);
        let slimito = await db.fetch(`slimido_${guild.id}`);
        if (slimito == limito || slimito > limito) {
          guild.unban(user.id);
          guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`One Banned!`)
            .setColor("BLACK")
            .addField(`Banner`, entry.executor.tag)
            .addField(`Banned Person`, user.name)
            .addField(
              `Result`,
              `The ban has been opened from the server!\and the ban has been lifted!\nNOTE: EXCEEDED!`
            );
          client.channels.get(kanal).send(embed);
        } else {
          const embed = new Discord.RichEmbed()
            .setTitle(`One Banned!`)
            .setColor("BLACK")
            .addField(`Banner`, entry.executor.tag)
            .addField(`Banned Person`, user.name)
            .addField(
              `Result`,
              `The ban has reached the limit of ${limito}/${slimito}!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        guild.unban(user.id);
        guild.members.get(entry.executor.id).kick();
        const embed = new Discord.RichEmbed()
          .setTitle(`One Banned!`)
          .setColor("BLACK")
          .addField(`Banner`, entry.executor.tag)
          .addField(`Banned Person`, user.name)
          .addField(
            `Result`,
            `The ban has been opened from the server!\nand the ban has been lifted!`
          );
        client.channels.get(kanal).send(embed);
      }
    }
  }
});



/////////////otorol

client.on("guildMemberAdd", async member  => {
  
  const botadı = 'Botunuzun Adı'
  
        let sayac = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
  let otorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let arole = otorole[member.guild.id].sayi
  let giriscikis = JSON.parse(fs.readFileSync("./otorol.json", "utf8"));  
  let embed = new Discord.RichEmbed()
    .setTitle(botadı,'Otorol Sistemi')
    .setDescription(`:loudspeaker: :inbox_tray:  @${member.user.tag}'a Otorol Verildi `)
.setColor("RANDOM")
    .setFooter(botadı, client.user.avatarURL);

  if (!giriscikis[member.guild.id].kanal) {
    return;
  }

  let üyesayı = member.size
  
    let giriscikiskanalID = giriscikis[member.guild.id].kanal;
    let giriscikiskanali = client.guilds.get(member.guild.id).channels.get(giriscikiskanalID);
    giriscikiskanali.send(`:white_check_mark: Hoşgeldin **${member.user.tag}** Seninle Birlikte ${üyesayı} kişiyiz! Rolün Başarıyla Verildi.`);
  

});

client.on("guildMemberAdd", async (member) => {
      let autorole =  JSON.parse(fs.readFileSync("./otorol.json", "utf8"));
      let role = autorole[member.guild.id].sayi

      member.addRole(role)
if(!member.addRole(role)) member.addRole(role);

});

/////////////

client.on("roleDelete", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_DELETE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    if (!rol) {
      if (entry.executor.id == client.user.id) return;
      if (entry.executor.id == role.guild.owner.id) return;
      role.guild
        .createRole({
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
        })
        .then(r => r.setPosition(role.position));

      const embed = new Discord.RichEmbed()
        .setTitle(`Bir Rol Silindi!`)
        .setColor("BLACK")
        .addField(`Silen`, entry.executor.tag)
        .addField(`Silinen Rol`, role.name)
        .addField(`Sonuç`, `Rol Geri Açıldı!`);
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limitrol_${entry.executor.id}`);
        let slimito = await db.fetch(`rollim_${role.guild.id}`);
        if (slimito == limito || slimito > limito) {
          role.guild
            .createRole({
              name: role.name,
              color: role.color,
              hoist: role.hoist,
              permissions: role.permissions,
              mentionable: role.mentionable,
              position: role.position
            })
            .then(r => r.setPosition(role.position));
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`Bir Rol Silen!`)
            .setColor("BLACK")
            .addField(`Rolü Silen`, entry.executor.tag)
            .addField(`Silinen Rol`, role.name)
            .addField(`Sonuç`, `Rol geri açıldı! Rolü silen sunucudan atıldı!`);
          client.channels.get(kanal).send(embed);
        } else {
          let limito = await db.fetch(`limitrol_${entry.executor.id}`);
          let slimito = await db.fetch(`rollim_${role.guild.id}`);

          role.guild
            .createRole({
              name: role.name,
              color: role.color,
              hoist: role.hoist,
              permissions: role.permissions,
              mentionable: role.mentionable,
              position: role.position
            })
            .then(r => r.setPosition(role.position));
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`Bir Rol Silen!`)
            .setColor("BLACK")
            .addField(`Rolü Silen`, entry.executor.tag)
            .addField(`Silinen Rol`, role.name)
            .addField(
              `Sonuç`,
              `Rol geri açılamadı! Rolü silen ${limito}/${slimito} sınırına ulaştı!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        role.guild
          .createRole({
            name: role.name,
            color: role.color,
            hoist: role.hoist,
            permissions: role.permissions,
            mentionable: role.mentionable,
            position: role.position
          })
          .then(r => r.setPosition(role.position));

        const embed = new Discord.RichEmbed()
          .setTitle(`Bir Rol Silindi!`)
          .setColor("BLACK")
          .addField(`Silen`, entry.executor.tag)
          .addField(`Silinen Rol`, role.name)
          .addField(`Sonuç`, `Rol Geri Açıldı!`);
        client.channels.get(kanal).send(embed);
      }
    }
  } else {
    if (!rol) {
      if (entry.executor.id == client.user.id) return;
      if (entry.executor.id == role.guild.owner.id) return;
      role.guild
        .createRole({
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
        })
        .then(r => r.setPosition(role.position));

      const embed = new Discord.RichEmbed()
        .setTitle(`A Role Deleted!`)
        .setColor("BLACK")
        .addField(`Role Deleter`, entry.executor.tag)
        .addField(`Deleting Role`, role.name)
        .addField(`Result`, `Role Back A Open!`);
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limitrol_${entry.executor.id}`);
        let slimito = await db.fetch(`rollim_${role.guild.id}`);
        if (slimito == limito || slimito > limito) {
          role.guild
            .createRole({
              name: role.name,
              color: role.color,
              hoist: role.hoist,
              permissions: role.permissions,
              mentionable: role.mentionable,
              position: role.position
            })
            .then(r => r.setPosition(role.position));
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`A Role Deleted!`)
            .setColor("BLACK")
            .addField(`Role Deleter`, entry.executor.tag)
            .addField(`Deleting Role`, role.name)
            .addField(
              `Result`,
              `Role Back A Open! Role Deleter Kicking Has Guild!`
            );
          client.channels.get(kanal).send(embed);
        } else {
          let limito = await db.fetch(`limitrol_${entry.executor.id}`);
          let slimito = await db.fetch(`rollim_${role.guild.id}`);

          role.guild
            .createRole({
              name: role.name,
              color: role.color,
              hoist: role.hoist,
              permissions: role.permissions,
              mentionable: role.mentionable,
              position: role.position
            })
            .then(r => r.setPosition(role.position));
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`A Role Deleted!`)
            .setColor("BLACK")
            .addField(`Role Deleter`, entry.executor.tag)
            .addField(`Deleting Role`, role.name)
            .addField(
              `Result`,
              `The role could not be turned back! Reached ${limito}/${slimito} limit, which opens the role!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        role.guild
          .createRole({
            name: role.name,
            color: role.color,
            hoist: role.hoist,
            permissions: role.permissions,
            mentionable: role.mentionable,
            position: role.position
          })
          .then(r => r.setPosition(role.position));

        const embed = new Discord.RichEmbed()
          .setTitle(`A Role Deleted!`)
          .setColor("BLACK")
          .addField(`Role Deleter`, entry.executor.tag)
          .addField(`Deleting Role`, role.name)
          .addField(`Result`, `Role Back A Open`);
        client.channels.get(kanal).send(embed);
      }
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  let pref = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  let dil = await db.fetch(`dil_${message.guild.id}`);
  if (message.content === "<@!665232633529368576>") {
    if (dil == "TR_tr") {
      message.channel.send(
        `Prefixim: \`${pref}\`\nEğer yardım istiyorsan; https://discord.gg/6Cc3fNM`
      );
    } else {
      message.channel.send(
        `My prefix is: \`${pref}\`\nIf you want to get help; https://discord.gg/6Cc3fNM`
      );
    }
  } else {
    return;
  }
});

client.on("guildMemberAdd", async member => {
  let user = member.guild.members.get(member.id);

  let kanal = await db.fetch(`güvenlik_${member.guild.id}`);
  let d = await db.fetch(`dil_${member.guild.id}`);

  if (!kanal) return;
  if (d == "TR_tr") {
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "15 günden sonra oluşturulmuş!";
    if (kurulus < 1296000000) kontrol = "15 günden önce oluşturulmuş!";
    if (kontrol == "15 günden sonra oluşturulmuş!") {
      const embed = new Discord.RichEmbed().setDescription(
        `${member} sunucuya katıldı! Hesabı; ${kontrol}`
      );
      client.channels.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikalınacak_${member.guild.id}`);
      let rol2 = await db.fetch(`güvenlikverilecek_${member.guild.id}`);
      if (!rol1) {
        if (!rol2) {
          return;
        } else {
          member.addRole(rol2);
          return;
        }
      } else {
        member.removeRole(rol1);
        if (!rol2) {
          return;
        } else {
          member.addRole(rol2);
          return;
        }
      }
    } else {
      const embed = new Discord.RichEmbed().setDescription(
        `${member} sunucuya katıldı! Hesabı; ${kontrol}`
      );
      client.channels.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikfake_${member.guild.id}`);
      if (!rol1) return;
      else {
        member.addRole(rol1);
      }
    }
  } else {
    const kurulus = new Date().getTime() - user.createdAt.getTime();
    const gün = moment(kurulus).format("dddd");
    var kontrol;
    if (kurulus > 1296000000) kontrol = "Created after 15 days!";
    if (kurulus < 1296000000) kontrol = "Created before 15 days!";
    if (kontrol == "Created after 15 days!") {
      const embed = new Discord.RichEmbed().setDescription(
        `${member} has joined the server! Account; ${kontrol}`
      );
      client.channels.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikalınacak_${member.guild.id}`);
      let rol2 = await db.fetch(`güvenlikverilecek_${member.guild.id}`);
      if (!rol1) {
        if (!rol2) {
          return;
        } else {
          member.addRole(rol2);
          return;
        }
      } else {
        member.removeRole(rol1);
        if (!rol2) {
          return;
        } else {
          member.addRole(rol2);
          return;
        }
      }
    } else {
      const embed = new Discord.RichEmbed().setDescription(
        `${member} has joined the server! Account; ${kontrol}`
      );
      client.channels.get(kanal).send(embed);
      let rol1 = await db.fetch(`güvenlikfake_${member.guild.id}`);
      if (!rol1) return;
      else {
        member.addRole(rol1);
      }
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
client.on("guildMemberAdd", async member => {
  let tag = await db.fetch(`ototag_${member.guild.id}`);
  let kanal = await db.fetch(`ototagk_${member.guild.id}`);
  let msj = await db.fetch(`ototagmsj_${member.guild.id}`);
  let dil = await db.fetch(`dil_${member.guild.id}`);
  if (!tag) return;
  if (!kanal) return;
  if (dil == "TR_tr") {
    if (!msj) {
      member.setNickname(`${tag} | ${member.user.username}`);
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `:loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`
        )
        .setFooter(client.user.username, client.user.avatarURL);
      client.channels.get(kanal).send(embed);
      return;
    } else {
      var msj2 = msj
        .replace(`-uye-`, `${member.user.username}`)
        .replace(`-tag-`, tag)
        .replace(`-sunucu-`, member.guild.name)
        .replace(`-uyetag-`, member.user.tag);
      member.setNickname(msj2);
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `:loudspeaker: **@${member.user.tag}** adlı şahsa tag verildi!`
        )
        .setFooter(client.user.username, client.user.avatarURL);
      client.channels.get(kanal).send(embed);
      return;
    }
  } else {
    if (!msj) {
      member.setNickname(`${tag} | ${member.user.username}`);
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `:loudspeaker: Tag was given to **@${member.user.tag}**!`
        )
        .setFooter(client.user.username, client.user.avatarURL);
      client.channels.get(kanal).send(embed);
      return;
    } else {
      var msj2 = msj
        .replace(`-uye-`, `${member.user.username}`)
        .replace(`-tag-`, `${tag}`)
        .replace(`-sunucu-`, member.guild.name)
        .replace(`-uyetag-`, member.user.tag);
      member.setNickname(msj2);
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setDescription(
          `:loudspeaker: Tag was given to **@${member.user.tag}**!`
        )
        .setFooter(client.user.username, client.user.avatarURL);
      client.channels.get(kanal).send(embed);
      return;
    }
  }
});
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////
client.on("roleCreate", async role => {
  const entry = await role.guild
    .fetchAuditLogs({ type: "ROLE_CREATE" })
    .then(audit => audit.entries.first());
  let rol = await db.fetch(`rolrol_${role.guild.id}`);
  let kontrol = await db.fetch(`dil_${role.guild.id}`);
  let kanal = await db.fetch(`rolk_${role.guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    if (!rol) {
      if (entry.executor.id == client.user.id) return;
      if (entry.executor.id == role.guild.owner.id) return;
      role.delete();

      const embed = new Discord.RichEmbed()
        .setTitle(`Bir Rol Açıldı!`)
        .setColor("BLACK")
        .addField(`Açan`, entry.executor.tag)
        .addField(`Açılan Rol`, role.name)
        .addField(`Sonuç`, `Rol Geri Silindi!`);
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limitrol_${entry.executor.id}`);
        let slimito = await db.fetch(`rollim_${role.guild.id}`);
        if (slimito == limito || slimito > limito) {
          role.delete();
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`Bir Rol Silen!`)
            .setColor("BLACK")
            .addField(`Rolü Açan`, entry.executor.tag)
            .addField(`Açılan Rol`, role.name)
            .addField(`Sonuç`, `Rol geri silindi! Rolü açan sunucudan atıldı!`);
          client.channels.get(kanal).send(embed);
        } else {
          let limito = await db.fetch(`limitrol_${entry.executor.id}`);
          let slimito = await db.fetch(`rollim_${role.guild.id}`);

          role.delete();
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`Bir Rol Silen!`)
            .setColor("BLACK")
            .addField(`Rolü Silen`, entry.executor.tag)
            .addField(`Silinen Rol`, role.name)
            .addField(
              `Sonuç`,
              `Rol geri silinmedi! Rolü açan ${limito}/${slimito} sınırına ulaştı!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        role.delete();

        const embed = new Discord.RichEmbed()
          .setTitle(`Bir Rol Silindi!`)
          .setColor("BLACK")
          .addField(`Rolü Açan`, entry.executor.tag)
          .addField(`Açılan Rol`, role.name)
          .addField(`Sonuç`, `Rol Geri Silindi!`);
        client.channels.get(kanal).send(embed);
      }
    }
  } else {
    if (!rol) {
      if (entry.executor.id == client.user.id) return;
      if (entry.executor.id == role.guild.owner.id) return;
      role.delete();

      const embed = new Discord.RichEmbed()
        .setTitle(`A Role Created!`)
        .setColor("BLACK")
        .addField(`Role Creator`, entry.executor.tag)
        .addField(`Creating Role`, role.name)
        .addField(`Result`, `Role Back A Deleted!`);
      client.channels.get(kanal).send(embed);
    } else {
      if (entry.executor.roles.has(rol)) {
        let limito = await db.fetch(`limitrol_${entry.executor.id}`);
        let slimito = await db.fetch(`rollim_${role.guild.id}`);
        if (slimito == limito || slimito > limito) {
          role.delete();
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`A Role Created!`)
            .setColor("BLACK")
            .addField(`Role Creator`, entry.executor.tag)
            .addField(`Creating Role`, role.name)
            .addField(
              `Result`,
              `Role Back A Deleted! Role Creator Kicking Has Guild!`
            );
          client.channels.get(kanal).send(embed);
        } else {
          let limito = await db.fetch(`limitrol_${entry.executor.id}`);
          let slimito = await db.fetch(`rollim_${role.guild.id}`);

          role.delete();
          role.guild.members.get(entry.executor.id).kick();
          const embed = new Discord.RichEmbed()
            .setTitle(`A Role Created!`)
            .setColor("BLACK")
            .addField(`Role Creator`, entry.executor.tag)
            .addField(`Creating Role`, role.name)
            .addField(
              `Result`,
              `The role could not be turned delete back! Reached ${limito}/${slimito} limit, which opens the role!`
            );
          client.channels.get(kanal).send(embed);
        }
      } else {
        role.delete();

        const embed = new Discord.RichEmbed()
          .setTitle(`A Role Created!`)
          .setColor("BLACK")
          .addField(`Role Creator`, entry.executor.tag)
          .addField(`Creating Role`, role.name)
          .addField(`Result`, `Role Back A Open`);
        client.channels.get(kanal).send(embed);
      }
    }
  }
});

client.on("channelDelete", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.createChannel(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.RichEmbed()
      .setTitle(`Bir Kanal Silindi!`)
      .addField(`Silen`, entry.executor.tag)

      .addField(`Silinen Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Açıldı!`)

      .setColor("BLACK");
    client.channels.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_DELETE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.guild.createChannel(channel.name, channel.type, [
      {
        id: channel.guild.id,
        position: channel.calculatedPosition
      }
    ]);

    const embed = new Discord.RichEmbed()
      .setTitle(`One Channel Deleted!`)
      .addField(`Deleter Channel`, entry.executor.tag)
      .setColor("BLACK")
      .addField(`Deleted Channel`, channel.name)
      .addField(`Result`, `Channel Back Opened!`);
    client.channels.get(kanal).send(embed);
  }
});

client.on("channelCreate", async channel => {
  let kontrol = await db.fetch(`dil_${channel.guild.id}`);
  let kanal = await db.fetch(`kanalk_${channel.guild.id}`);
  if (!kanal) return;
  if (kontrol == "TR_tr") {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setTitle(`Bir Kanal Açıldı!`)
      .setColor("BLACK")
      .addField(`Açan`, entry.executor.tag)
      .addField(`Açılan Kanal`, channel.name)
      .addField(`Sonuç`, `Kanal Geri Silindi!`);
    client.channels.get(kanal).send(embed);
  } else {
    const entry = await channel.guild
      .fetchAuditLogs({ type: "CHANNEL_CREATE" })
      .then(audit => audit.entries.first());
    if (entry.executor.id == client.user.id) return;
    if (entry.executor.id == channel.guild.owner.id) return;
    channel.delete();
    const embed = new Discord.RichEmbed()
      .setTitle(`A Channel Opened!`)
      .setColor("BLACK")
      .addField(`Channel Opener`, entry.executor.tag)
      .addField(`Drop Down Channel`, channel.name)
      .addField(`Result`, `Channel Back Deleted!`);
    client.channels.get(kanal).send(embed);
  }
});

/*client.on("guildCreate", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`GREEN`)
    .setTitle(`EKLENDİM/ADDED!`)
    .setDescription(
      `Sunucu Adı/Guild Name: ${guild.name}\nSunucu Id/Guild Id: ${guild.id}\nSunucu Sahibi/Guild Owner: ${guild.owner}\nSunucudaki Kişi Sayısı/Guild Member Count: ${guild.memberCount}\nSunucu Oluşturulma Zamanı/Guild Created Time: ${guild.createdAt}\nDoğrulama Seviyesi\nVerifection Level: ${guild.verificationLevel}`
    );
  client.channels.get(`675041940634468353`).send(embed);
});
client.on("guildDelete", async guild => {
  const embed = new Discord.RichEmbed()
    .setColor(`RED`)
    .setTitle(`ATILDIM/REMOVED!`)
    .setDescription(
      `Sunucu Adı/Guild Name: ${guild.name}\nSunucu Id/Guild Id: ${guild.id}\nSunucu Sahibi/Guild Owner: ${guild.owner}\nSunucudaki Kişi Sayısı/Guild Member Count: ${guild.memberCount}\nSunucu Oluşturulma Zamanı/Guild Created Time: ${guild.createdAt}\nDoğrulama Seviyesi\nVerifection Level: ${guild.verificationLevel}`
    );
  client.channels.get(`675041940634468353`).send(embed);
});*/

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(ayarlar.token);

////kanala mesaj
client.on("guildCreate", guild => {
  let kanal = guild.channels.filter(c => c.type === "text").random();

  kanal.send(
    "Selamlar Ben Guard Beni Sunucuna Davet Ettiğin İçin Teşekkürler! Gerekli Bilgileri Almak İçin g!yardım Yazabilirsiniz.🔔"
  );
});