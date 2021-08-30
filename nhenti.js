

let util = require('util')
let path = require('path')
let { spawn } = require('child_process')
const fetch = require('node-fetch')

let handler = async (m, { conn, text, args}) => {
if (!args[0]) throw 'Enter the Nuclear Code'
try {
data = await fetch('https://api.vhtear.com/nhentaipdfdownload?query=287167&apikey=apikey').then(v => v.json())
conn.sendMessage(m.chat, data.result.pdf_file, document, { mimetype: 'application/pdf', filename: data.result.secondary_title})
} catch {
m.reply('Error!')
}
}
handler.help = ['nhentai']
handler.tags = ['dewasa']
handler.command = /^nhentai$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.limit = 2
handler.fail = null
handler.register = true

module.exports = handler

// If there is an error, can you help