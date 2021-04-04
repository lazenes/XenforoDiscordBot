const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.run = async (client, message, args) => {
 var sonkonu = "";
const body = await fetch("https://sinnerclownceviri.com/dcbot.php").then(response => {
    data = response.json(); //data is a json object

 let konu = new Discord.MessageEmbed()
  .setAuthor('Forum Son Konu Bilgisi', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#ff1b1b')
  .setDescription(`**Konu Adı:** \`data['394']['baslik']\` \n **Yayınlayan:** \`data['394']['konu_sahibi']\``)
  .addField("» KonuL inki", `[data['394']['baslik']](data['394']['KonuLink'])`  , false)

  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
  sonkonu=konu
 
   return message.channel.send(konu);
  
})
.catch(e => {
  return message.channel.send("JSON Verisine Erişilemiyor");
}
  )
  

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
}