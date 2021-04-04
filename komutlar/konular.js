const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.run = async (client, message, args) => {
 
const data = await fetch("https://sinnerclownceviri.com/dcbot.php") .then(response => response.json());
  
if (!data.konular.length) {
            return message.channel.send(`Görüntülenecek İçerik Yok`);
        }else{
         
          const sonkonu = data.konular;
          var mesaj="";
  for (let i = 0; i < data.konular.length; i++){
        
 /*let konu = new Discord.MessageEmbed()
  .setAuthor('Forum da son durum', message.author.displayAvatarURL())
  .setThumbnail(sonkonu[i]["avatar"])
  .setColor('#ff1b1b')
  .setDescription(`**Son Yorum:** \` ${sonkonu[i]["sonYorum"]} \` \n **Yorum Sahibi:** \` ${sonkonu[i]["yorumSahibi"]} \` \n **Konu Adı:** \` ${sonkonu[i]["baslik"]} \` \n **Yayınlayan:** \` ${sonkonu[i]["konuSahibi"]} \``)
  .addField("» Konu Linki", `[${sonkonu[i]["baslik"]}](${sonkonu[i]["KonuLink"]})`  , false)
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
 */

    return message.channel.send(i);
   
  
}
 
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