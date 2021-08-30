let oreki = './src/oreki.jpg'
let handler = async m => conn.sendFile(m.chat,'./src/oreki.jpg', 'oreki.jpg', 'ohayo', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^kunj$/i

module.exports = handler