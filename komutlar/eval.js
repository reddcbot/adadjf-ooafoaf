const Discord = require("discord.js");

exports.run = async (bot, message, args, color, prefix) => {
  if (message.author.id !== "674261557571616771") return;
  try {
    let rixnux = args.join(" ");
    let code = eval(rixnux);

    if (typeof code !== "string")
      code = require("util").inspect(code, { depth: 0 });
    let embed = new Discord.RichEmbed()
      .setAuthor("Eval Sonucu;")
      .setColor("RANDOM")
      .addField("📥 Giriş:", `\`\`\`js\n${rixnux}\`\`\``)
      .addField("📤 Çıkış", `\`\`\`js\n${code}\n\`\`\``);
    message.channel.send(embed);
  } catch (e) {
    message.channel.send(`\`\`\`js\n${e}\n\`\`\``);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["evalma", "evsat"],
  permLevel: 0
};

exports.help = {
  name: "eval",
  description: "Kod denersiniz.",
  usage: "eval <kod>"
};