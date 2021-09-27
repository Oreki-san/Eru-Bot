
let fetch = require('node-fetch')
let handler = async(m, { conn }) => {
  let res = await fetch('https://api.waifu.pics/sfw/waifu')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.url) throw 'Error!'
  conn.sendFile(m.chat, json.url, '',
'
╭─「 %me 」
│ Haai, %name!
│
│ remaining *%limit Limit*
│ Level *%level (%exp / %maxexp)* [%xp4levelup again for levelup]
│ %totalexp XP in Total
│ 
│ Date: *%week %weton, %date*
│ Time: *%time*
│
│ Uptime: *%uptime (%muptime)*
│ Database: %rtotalreg of %totalreg
│ 
│ 
╰────
╭─「 Main 」
│ • #afk [Reason]
│ • #menu
│ • #help
│ • #?
╰────

╭─「 Game 」
│ • #math <mode>
│ • #guessthepicture
│ • #Guess the song (Limit) (Premium)
|  • #ttt
╰────

╭─「 Exp & Limit 」
│ • #buy<amount limit>
│ • #buy <amount limit>
│ • #buyall
│ • #daily
│ • #claim
│ • #leaderboard [amount user]
│ • #lb [amount user]
│ • #levelup
│ • #pay @user <amount>
│ • #paylimit @user <amount>
╰────

╭─「 Sticker 」
│ • #attp <texts>
│ • #emoticon [type] <emoji>
│ • #sticker 
│ • #sgif
│ • #toimg (reply)
│ • #ttp <text>
│ • #wm <packname>|<author>
╰────

╭─「 Fun 」
│ • #ship
│ • #what is <question>
│ • #kiss
│ • #hug
│ • #lick
│ • #pat
|  •#bite
|  •#cuddle
╰────

╭─「 Quotes 」
│ • #quotes
|  • #quotemaker (caption) | (name)
╰────

╭─「 Admin 」
│ • #addnumber,number (Limit) (Premium)
│ • #+number,number (Limit) (Premium)
│ • #demote @user
│ • #member @user
│ • #↓ @user
│ • #kick @user (Limit) (Premium)
│ • #- @user (Limit) (Premium)
│ • #promote @user
│ • #admin @user
│ • #^ @user
│ • #↑ @user
╰────

╭─「 Group 」
│ • #group *open / close*
│ • #enable <option>
│ • #disable <option>
│ • #linkgroup
│ • #here
│ • #listonline
│ • #announcement [Text] (Limit) (Premium)
│ • #announce [Text] (Limit) (Premium)
│ • #hidetag [Text] (Limit) (Premium)
│ • #setbye <Text>
│ • #setwelcome <Text>
│ • #simulate <event> [@mention]
╰────

╭─「 Premium 」
│ • #join <chat.whatsapp.com>
╰────

╭─「 Internet 」
│ • #brainly <question>
│ • #fetch <url>
│ • #get <url>
│ • #google <search>
│ • #googlef <search>
│ • #neko
│ • #ss <url>
│ • #ssf <url>
│ • #wallpaperanime (Limit) (Premium)
╰────

╭─「 Anonymous Chat 」
│ • #start
│ • #leave
│ • #next
╰────

╭─「 Downloader 」
│ • #fb <url>
│ • #ig <url>
│ • #ighighlight <username>
│ • #igstalk <username>
│ • #igstory <username>
│ • #play <search> (Limit) (Premium)
│ • #play2 <search> (Limit) (Premium)
│ • #tiktok <url>
│ • #ytmp3 <url> (Limit) (Premium)
│ • #yta <url> (Limit) (Premium)
│ • #ytmp4 <url> (Limit) (Premium)
│ • #ytv <url> (Limit) (Premium)
│ • #yt <url> (Limit) (Premium)
╰────

╭─「 Tools 」
│ • #base64
│ • #calc <expression>
│ • #searchgroup <search>
│ • #searchmessage <message>|<number>
│ • #hd (caption|reply media)
│ • #enhance (caption|reply media)
│ • #enphoto <effect> <text>|[text2]|[text3]
│ • #githubsearch <Search>
│ • #halah <teks>
│ • #hilih <teks>
│ • #huluh <teks>
│ • #heleh <teks>
│ • #holoh <teks>
│ • #inspect <chat.whatsapp.com>
│ • #mention <text>
│ • #profile [@user]
│ • #qr <text>
│ • #qrcode <text>
│ • #readmore <text>|<text>
│ • #spoiler <text>|<text>
│ • #run (Limit) (Premium)
│ • #ping
│ • #speed
│ • #style <text>
│ • #textpro <effect> <text>|[text2]
│ • #translate <lang> <text>
│ • #tts <Language> <Text>
│ • #upload (caption|reply media)
│ • #wait (caption|reply image)
│ • #yts <Question>
│ • #ytsearch <Question>
╰────

╭─「 Database 」
│ • #addvn <text>
│ • #addmsg <text>
│ • #addvideo <text>
│ • #addaudio <text>
│ • #addimg <text>
│ • #addsticker <text>
│ • #delvn <text>
│ • #delmsg <text>
│ • #delvideo <text>
│ • #delaudio <text>
│ • #delimg <text>
│ • #delsticker <text>
│ • #getvn <text>
│ • #getmsg <text>
│ • #getvideo <text>
│ • #getaudio <text>
│ • #getimg <text>
│ • #getsticker <text>
│ • #listvn
│ • #listmsg
│ • #listvideo
│ • #listaudio
│ • #listimg
│ • #liststicker
╰──── 

╭─「 Owner 」
│ • #addprems <number>
│ • #banchat
│ • #ban
│ • #broadcast <text>
│ • #bc <text>
│ • #broadcastgroup <Text>
│ • #bcgc <Text>
│ • #deletechat
│ • #deletechat group
│ • #mutechat
│ • #mutechat group
│ • #enable <option>
│ • #disable <option>
│ • #oadd @user
│ • #o+ @user
│ • #odemote @user
│ • #omember @user
│ • #ov @user
│ • #okick @user
│ • #o- @user
│ • #oannouncement [teks]
│ • #ohidetag [teks]
│ • #opromote @user
│ • #oadmin @user
│ • #o^ @user
│ • #setbye <Text>
│ • #setmenu <Text>
│ • #setmenubefore <Text>
│ • #setmenuheader <Text>
│ • #setmenubody <Text>
│ • #setmenufooter <Text>
│ • #setmenuafter <Text>
│ • #setwelcome <Text>
│ • #simulate <event> [@mention]
│ • #unbanchat
╰────

╭─「 Host 」
│ • #bcbot <text>
│ • #debounce
│ • #update
╰────

╭─「 Advanced 」
│ • >
│ • =>
╰────

╭─「 Info 」
│ • #owner
│ • #creator
│ • #del
│ • #delete
│ • #donate
│ • #groups
│ • #grouplist
│ • #bug <report>
│ • #report <report>
│ • #ping
│ • #speed
╰────

╭─「 No Category 」
│ • #save @mention <ContactName>
│ • #getsider
│ • # <>
│ • #tictactoe [custom room name]
│ • #ttt [custom room name]
│ • #upsw [text] (Reply Media)
│ • #upsw <text>
╰────


*Eru-Bot by JJ-Oreki*
```Customizable WhatsApp Bot```)
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








