const db = require("quick.db");
const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let prefix = "r!"
  if (!message.member.permissions.has("ADMINISTRATOR"))
    return message.channel.send(`Buna yetkin yok!`);
  if (args[0] == "sıfırla") {
    db.delete(`jailrol${message.guild.id}`);
    message.channel.send(`**Jail Sistemi Başarıyla Sıfırlandı!**`);
    return;
  }

  if (args[0] == "rol") {
    let role =
      message.mentions.roles.first() ||
      message.guild.roles.find(ff => ff.name === args.slice(1).join(" "));
    db.set(`jailrol${message.guild.id}`, role.id);
    message.channel.send(
      `**Jail Sistemi Cezalı Rolü Ayarlandı!\nAyarlanan Rol:** \`${role.name}\``
    );
    return;
  }
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!user) return message.reply("**Dostum Etiket Atmayı Unuttun**");
  let sebep = args.slice(1).join(" ");
  if (!sebep) return message.channel.send(`**Sebep Yazmayı Unuttun**`);
  let newrole = await db.fetch(`jailrol${message.guild.id}`);
  message.channel.send(
    new Discord.RichEmbed()
      .setColor("BLACK")
      .setTitle(`Rixnux Code Ceza sistemi`)
      .setThumbnail(message.guild.iconURL)
      .setDescription(
        `<@${
          message.author.id
        }> yetkilisi tarafından ${user} kişisi\n\nVerilen Rol: <@&${newrole}>\n\nSebep: \`${
          args[1]
        }\``
      )
      .setImage(
        `https://cdn.discordapp.com/attachments/692281546056532009/713118560049954816/tenor.gif`
      ).setFooter(`Derdi Dünya Olanın Dünya Kadar Derdi Olur`).setTimestamp()
  );
  message.guild
    .member(user)
    .roles.forEach(x => user.removeRole(x).then(f => f.addRole(newrole)));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["cezala"],
  permLevel: 0
};

exports.help = {
  name: "jail"
};

