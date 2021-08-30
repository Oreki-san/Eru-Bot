// Terimakasih kpd RC047 :v
// Fitur By Xteams

const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { usedPrefix, conn, args, text }) => {
  let [tipe, emoji] = text.includes('|') ? text.split('|') : args
  if (tipe && !emoji) {
    emoji = tipe
    tipe = 'whatsapp'
  }
  if (!emoji) throw `Please enter the emojis\n\nExample${usedPrefix}emoticon whatsapp 😎\n\nList Type:
- whatsapp
- facebook
- apple
- google
- microsoft`
  let stiker = await sticker(null, global.API('xteam', '/sticker/emojitopng' + encodeURI(tipe.trim().toLowerCase()), { emo: emoji.trim() }, 'APIKEY'), global.packname, global.author)
//   m.reply(`
// Tipe: ${tipe.trim().toLowerCase()}
// Emoji: ${emoji.trim()}
// `.trim())
  m.reply(stiker)
}
handler.help = ['emoticon [type] <emoji>']
handler.tags = ['sticker']
handler.command = /^s?emo(ji)?$/i
module.exports = handler
