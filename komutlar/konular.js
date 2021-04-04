const Discord = require('discord.js');
const fetch = require('node-fetch');
const querystring = require('querystring');

exports.run = async (client, message, args) => {
 
const data = await fetch("https://sinnerclownceviri.com/dcbot.php") .then(response => response.json());
  
if (!data.length) {
            return message.channel.send(`Görüntülenecek İçerik Yok`);
        }else{
 let konu = new Discord.MessageEmbed()
  .setAuthor('Forum Son Konu Bilgisi', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#ff1b1b')
  .setDescription(`**Konu Adı:** \`data.394.baslik\` \n **Yayınlayan:** \`data.394.konu_sahibi\``)
  .addField("» Konu Linki", `[data.394.baslik](data.394.KonuLink)`  , false)
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