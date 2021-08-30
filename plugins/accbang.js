let handler = async (m, { conn, isAdmin }) => {
  if (m.fromMe) throw 'err'
  if (isAdmin) throw 'Even though I have become an admin'
  await conn.groupMakeAdmin(m.chat, [m.sender])
}
handler.command = /^admin.$/i
handler.rowner = true
handler.botAdmin = true
module.exports = handler
