const { MessageType } = require('@adiwajshing/baileys')
const { Sticker } = require('wa-sticker-formatter')
const isUrl = (text) => {
    return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
  }
let handler = async (m, { conn, args  , usedPrefix, command }) => {
    let sticker = false
    const slicedArgs = args.slice(1);
    const joined = slicedArgs.join('').trim()
  let pack = joined.split('|');  
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (/image/.test(mime)) {
          let img = await q.download()
          if (!img) throw `reply image with caption *${usedPrefix + command}*`
     sticker = await new Sticker(img, {type: 'full', pack : pack[0] || global.packname , author : pack[1] || global.author, categories : "❤"}).build()
  }else if (/video/.test(mime)) {
    if ((q.msg || q).seconds > 11) return m.reply('Maximum 10 seconds!')
      let img = await q.download()
      if (!img) throw `reply image with caption *${usedPrefix + command}*`
      sticker = await new Sticker(img, {type: 'full', pack : pack[0] || global.packname , author : pack[1] || global.author, categories : "❤"}).build()
    // m.reply(`stickerGIF with this command is in under development use ${usedPrefix}stickergif`)

}else if (/webp/.test(mime)) {
  let img = await q.download()
      if (!img) throw `reply image with caption *${usedPrefix + command}*`
      sticker = await new Sticker(img, {type: 'full', pack : pack[0] || global.packname , author : pack[1] || global.author, categories : "❤"}).build()
  // m.reply(`stickerGIF with this command is in under development use ${usedPrefix}stickergif`)
  }else if (args[0]) {
    if (isUrl(args[0])) Sticker(img, {type: 'full',pack : global.packname , author : global.author, categories : "❤"}).build()
    else return m.reply('Invalid Url!')
  }


} finally {
        if (sticker) conn.sendMessage(m.chat, sticker, MessageType.sticker, {
            quoted: m
          })
        else throw 'Conversion failed'


    }


    }

    handler.command = /^sticker?$/i
  module.exports = handler
