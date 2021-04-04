const Discord = require('discord.js');



var fetch = require("node-fetch")
module.exports = async function(params, keys) {
		let url
    if (keys.domain.slice(-1) !== '/') keys.domain += '/'
		if (params.ops.target) {url = `https://sinnerclownceviri.com/dcbot.php`} else url = `$https://sinnerclownceviri.com/dcbot.php?json`
    
    let reqS = await fetch(url, {
      method: 'post',
      body:    params.data,
      headers: { 'Content-Type': 'application/json' },
  })
    return console.log(reqS.json())
 }


exports.conf = {
  aliases: [],
  permLevel: 0,
  kategori: 'Eğlence'
};
exports.help = {
  name: 'konular',
   description: 'Güncel Konuları Gösterir.',
  usage: 'konular'
};