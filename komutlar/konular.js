const Discord = require('discord.js');


exports.run = async (client, message, args) => {
   
fetch("https://sinnerclownceviri.com/dcbot.php")
.then(response => {
    data = response.json(); //data is a json object
   // document.getElementById("YOUR ID").innerHTML = data["SOME KEY"];
 let embed = new Discord.MessageEmbed()
  .setAuthor('Forum Son Konu Bilgisi', message.author.displayAvatarURL())
  .setThumbnail(client.user.avatarURL())
  .setColor('#FFFB05')
  .setDescription(`**Konu Adı:** \`data['394'][]\` \n **Örnek:** \`${prefix}yardım Genel\``)
    .addField("» Linkler", ` [Davet Et](https://discord.com/oauth2/authorize?client_id=825742618528972890&scope=bot&permissions=2108157183)` + "** | **" + `[Web Sitesi](https://sinnerclownceviri.com)  `, false)

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