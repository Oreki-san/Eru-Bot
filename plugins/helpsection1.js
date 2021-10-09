let handler = async m => m.reply(`
ヽ(✿ ͜ʖ✿)ﾉ Konichuwa , Watasi no namae Chitanda eru desu🌸


🌼 Here's Command Menu 🌼
➡️you can go to Each Section With adding Section's number after help

There are many hidden commands explore on ur own

Ex : #help 1



🗒️ Help section 1 🗂️
📌Section - General 
 Command : help-1
 Aliases : help sticker


🗒️ Help section 2 
📌Section - Sticker
 Command : help-2
 Aliases :


🗒️ Help section 3 
📌Section - Downloader
 Command : help-3
 Aliases :

🗒️ Help section 4 
📌Section - Database
 Command : help-4
 Aliases : 


🗒️ Help section 5 
📌Section - Tools
 Command : help-5
 Aliases :

🗒️ Help section 6 
📌Section - Database
 Command : help-6
 Aliases :

`.trim()) // Tambah sendiri kalo mau
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^help-1.2$/i

module.exports = handler
// General 🌈

// 💠 CMD: #help
// ♦ Description: Shows the command lists based on the index
// 🔰 Usage: #help (number)
// ❄ Example: #help 1

// 💠 CMD: #group
// ♦ Description: Displayes the groupinfo
// 🔰 Usage: #group


// 💠 CMD: #report
// ♦ Description: Report any bug
// 🔰 Usage: #report [text]
// ❄ Example: #report Wallpaper isn't working

// 💠 CMD: #info
// ♦ Description: Well...
// 🔰 Usage: #info


// 💠 CMD: #support
// ♦ Description: Lists all the support group links
// 🔰 Usage: #support
