let handler = async (m, { conn, text, isROwner, isOwner }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if (isOwner) conn.welcome = text
    global.DATABASE._data.chats[m.chat].sWelcome = text
    m.reply('Welcome is set up successfullt\n@user (Mention)\n@subject (Judul Grup)')
  } else throw 'where is the text, baka?'
}
handler.help = ['setwelcome <Text>']
handler.tags = ['owner', 'group']

handler.command = /^setwelcome$/i
module.exports = handler

