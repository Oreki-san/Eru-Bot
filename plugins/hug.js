let fetch = require('node-fetch')
const axios = require('axios')

let handler = async(m, { conn, text, usedPrefix }) => {
    axios.get(`https://api.i-tech.id/anim/hug?key=selVHB-QcNIs3-DS6jjp-8BPCH9-IJIlhH`)
        .then((res) => {
            if (res.data.pesan) return conn.reply(m.chat, res.data.pesan, m)
                // conn.sendFile(m.chat, x.thumb, 'text', `➸ *Title* : ${x.title}\n\n➸ *Quality* : ${x.quality}\n\n➸ *Rating* : ${x.rating}\n\n➸ *Link* : ${x.link}`, m)
            conn.sendFile(m.chat, res.data.result, 'photo', '', m)
                // conn.reply(m.chat, `*Link:* ${dl_link} `, m)

        })
        .catch(() => {
            conn.reply(m.chat, 'Ada yang Error!', m)
        })
}
handler.help = ['hug', 'pelukan']
handler.tags = ['random']
handler.command = /^(hug|pelukan)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

module.exports = handler
