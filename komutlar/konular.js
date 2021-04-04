const Discord = require('discord.js');


exports.run = async (client, message, args) => {
   
fetch("https://sinnerclownceviri.com/dcbot.php")
.then(response => {
    data = response.json(); //data is a json object
   // document.getElementById("YOUR ID").innerHTML = data["SOME KEY"];
 let embed = new Discord.MessageEmbed()
  .setAuthor('Forum Son Konu Bilgisi', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('red')
  .setDescription(`**Konu Adı:** \`data['394']['baslik']\` \n **Yayınlayan:** \`data['394']['konu_sahibi']\``)
  .addField("» KonuL inki", `[data['394']['baslik']](data['394']['KonuLink'])`  , false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  message.channel.send(embed)
  
  
  
})

      }


exports.conf = {
  aliases: ['Konular','konular'],
  permLevel: 0,
  kategori: 'Forum'
};
exports.help = {
  name: 'konular',
   description: 'Güncel Konuları Gösterir.',
  usage: 'konular'
};