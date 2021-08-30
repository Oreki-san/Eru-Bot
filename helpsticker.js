
let handler = async m => m.reply(`

Here you can Find all 
🧩sticker commands🧩

📘 *Command* : sticker
*Usage* : turns image/gif into 
sticker
*alternative* : s
_note : You can add url too_
_example : sticker (url)_

📕 *Command* : semoji (text) | emoji
*Usage* : turns emoji into sticker 
alternatives : esticker

📄 *Command* : toimg
*Usage* : Turn sticker into image

`) 
handler.help = ['help 2']
handler.tags = ['info']
handler.command = /^(helpsticker|help-2)$/i


module.exports = handler