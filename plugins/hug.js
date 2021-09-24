let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/hug')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, {caption : `@${m.sender.split(`@`)[0]} hugged @${m.mentionedJid[0].split(`@`)[0]} `, contextInfo : {mentionedJid : [m.sender , m.mentionedJid[0]]}
})
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^hug$/i

module.exports = handler
