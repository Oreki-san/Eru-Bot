


let handler = async (m, { conn, text, participants }) => {
    let users = participants.map(u => u.jid)
    const picked = users[Math.floor(Math.random() * users.length)]


    conn.reply(m.chat,`${text} in this group : @${picked.split('@')[0]}`,m,{contextInfo : {mentionedJid : [picked]}})
    // conn.reply(m.chat, text, m, { contextInfo: { mentionedJid: users } })
  
    
    console.log(picked)

}



handler.command = /^(pick)$/i
module.exports = handler