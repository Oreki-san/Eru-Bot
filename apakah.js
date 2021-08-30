let handler = async (m, { conn, text }) => {
  conn.reply(m.chat, `
*question:* ${m.text}
*answer:* ${pickRandom(['Yes','Maybe yes','maybe','Probably not','Not','Impossible'])}
`.trim(), m, m.mentionedJid ? {
  contextInfo: {
    mentionedJid: m.mentionedJid
  }
} : {})
}
handler.help = ['is <text>?']
handler.tags = ['kerang']
handler.customPrefix = /(\?$)/
handler.command = /^what$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

