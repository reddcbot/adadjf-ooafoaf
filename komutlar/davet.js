const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  const embed = new Discord.RichEmbed()
    .setDescription(
      `[Tıkla!](https://discordapp.com/oauth2/authorize?client_id=675027426761506836&scope=bot&permissions=2146958847)`
    )

    .setColor("BLACK")
    .setFooter(client.user.username, client.user.avatarURL);
  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "davet",
  usage: "davet"
};
