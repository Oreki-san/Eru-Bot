let oreki = "./src/oreki.jpg"

 conn.sendFile(
    m.chat, {"imageMessage" : { MimeType : 'image/jpeg' , caption :" hello",
 }})


handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^bruh$/i

module.exports = handler
