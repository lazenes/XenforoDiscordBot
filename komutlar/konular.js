const Discord = require('discord.js');


exports.run = async (client, message, args) => {
   
fetch("https://sinnerclownceviri.com/dcbot.php")
.then(response => {
    data = response.json(); //data is a json object
   // document.getElementById("YOUR ID").innerHTML = data["SOME KEY"];
   console.log(data);
    message.channel.send(data);
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