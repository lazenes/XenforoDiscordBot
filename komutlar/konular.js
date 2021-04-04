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

 
  
     
 let konu = new Discord.MessageEmbed()
  .setAuthor('Forum da Öne çıkan '+(i+1)+' Numaralı Konu', message.author.displayAvatarURL())
  .setThumbnail(sonkonu[i]["avatar"])
  .setColor('RANDOM')
  .setDescription(`**Konu Adı:** \` ${sonkonu[i]["baslik"]} \` \n   **Konu Sahibi:** \` ${sonkonu[i]["konuSahibi"]} \` \n  **Toplam Yorum:** \` ${sonkonu[i]["toplamYorum"]} \` Adet \n **Son Yorum:** \` ${sonkonu[i]["sonYorum"]} \` \n **Yorum Sahibi:** \` ${sonkonu[i]["yorumSahibi"]} \``)
  .addField("» Konu Linki", `[${sonkonu[i]["baslik"]}](${sonkonu[i]["KonuLink"]})`  , false)
  .setFooter('Bu komutu kullanan kullanıcı ' + message.author.tag, message.author.displayAvatarURL())
 
message.channel.send({embed: konu});

 /*
    return message.channel.send(konu);
   */
  
}
 
}
}
  

      


exports.conf = {
  aliases: ['Konular','konular'],
  permLevel: 0,
  kategori: 'Genel'
};
exports.help = {
  name: 'konular',
   description: 'Güncel Konuları Gösterir.',
  usage: 'Konular'
};