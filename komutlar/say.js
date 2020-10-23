const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.RichEmbed()
.setTitle(`♛**${client.user.username}**♛`)
.setDescription(` ➥Üye sayısı: ${message.guild.memberCount}`)
      .setTimestamp()
.setFooter(`${message.author.username} Tarafından istendi.`)
.setColor(0xff7f00)

message.channel.sendMessage(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};
 
exports.help = {
    name: 'say',
    description: 'saat',
    usage: 'saat'
};