const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `register first? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `Format well\n*${usedPrefix}register name.age*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'write your name (Alphanumeric)'
  if (!age) throw 'write your age(Angka)'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Register successful!

╭─「 Info 」
│ Nama: ${name}
│ Umur: ${age}thn
│ SN: ${sn}
╰────
`.trim())
}
handler.help = ['daftar', 'reg', 'register'].map(v => v + ' <name>.<age>')
handler.tags = ['exp']

handler.command = /^(register|reg(ister)?)$/i

module.exports = handler

