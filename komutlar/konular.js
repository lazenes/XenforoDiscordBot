const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.run = async (client, message, args) => {
 
const data = await fetch("https://sinnerclownceviri.com/dcbot.php") .then(response => response.json());
  
if (!data.konular.length) {
            return message.channel.send(`Görüntülenecek İçerik Yok`);
        }else{
          const [sonkonu] = data.konular;
          
 let konu = new Discord.MessageEmbed()
  .setAuthor('Forum da son durum', message.author.displayAvatarURL())
  .setThumbnail(sonkonu["avatar"])
  .setColor('#ff1b1b')
  .setDescription(`**Son Yorum:** \` ${sonkonu["sonYorum"]} \` \n **Yorum Sahibi:** \` ${sonkonu["yorumSahibi"]} \` \n **Konu Adı:** \` ${sonkonu["baslik"]} \` \n **Yayınlayan:** \` ${sonkonu["konuSahibi"]} \``)
  .addField("» Konu Linki", `[${sonkonu["baslik"]}](${sonkonu["KonuLink"]})`  , false)
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
 
 
   return message.channel.send(konu);
  
}
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