// xie hua piao piao batman membuka kulkas dan mngambil semangka lalu memberikan mayo di atas semangka

let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '', '_*Hello kiddos  I am Cara Chan🎐 (UwU)*_\n_*I dont know why I am here*_\n   \n*[ 📍Commands📍]*\n_#menu to see the trash commands_\n  \n*GROUP📈]:-*\n_group open/close, tagall, enable/disable [option], infogrup, linkgroup,here, listonline, hidetag, set [bye/welcome], revoke, promote/demote @user , add_\n*ANIME🇯🇵]:-*\n_anime [name],kiss,baka,slap,hug,pat,character [name],neko,waifu,wallpaperanime_\n*TOOLS🗜️]:-*\n_calc [expression], covid,readmore [text|text],ping,speed,leaderboard,style [text],translate [lang|text],owner,creator,profile,bc [text] ,delete,gay, lyrics [song name] ,afk [reason],!tictactoe @user,join [group link]_\n*IMAGE📱]:-*\n_gimage [name],lolice,tahta [text] wallpaperq [name],meme_\n*DOWNLOADS📥]:-*\n_fb/ig/yt<mp3/mp4> [link],play [song name]_\n*STICKER🎑]:-*\n_attp2 [text],sticker,ttpdark [text],wm [pkname|author],togift,toimg_\n_*Ok Bye I hope I dont have to come here again*_\n _*Use #infocmd to get information about commands*_', m)
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler








