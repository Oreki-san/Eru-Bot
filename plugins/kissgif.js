const axios = require('axios')

let handler = async(m, { conn, text }) => {
    new Promise((resolve, reject) => {
        axios.get(`https://nekos.life/api/v2/img/kiss`)
            .then((res) => {
                conn.sendFile(m.chat, res.data.url, '', '', m)
            })
            .catch(reject)
    })

}

handler.help = ['kissgif']
handler.tags = ['random']
handler.command = /^kissgif$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
