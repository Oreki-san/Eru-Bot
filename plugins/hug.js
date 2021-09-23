let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/hug')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', `@${m.sender.split('@')[0]} Hugged @${m.mentionedJid[0]}`, m)
}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^hug$/i

module.exports = handler
