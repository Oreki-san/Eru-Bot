let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://zxbott.herokuapp.com/husbu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '*Here is your husbu*', m)
}
handler.help = ['husbu']
handler.tags = ['internet']
handler.command = /^(husbu)$/i
module.exports = handler
