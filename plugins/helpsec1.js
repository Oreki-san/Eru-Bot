let handler = async m => m.reply(`
*ヽ(✿ ͜ʖ✿)ﾉ Konichuwa, Watasi no namae Chitanda eru desu🌸*


🌼 *Here's Command Menu* 🌼
🎗️ *you can go to Each Section With adding Section's number after help* 

*Ex :* #help 1



💠 *HELP SECTION 1* 🌀
*💫Section - General* 
*Command :* help-1
*Aliases :* help sticker


💠 *HELP SECTION 2* 🌀
*💫Section - Sticker* 
*Command :* help-2

💠 *HELP SECTION 3* 🌀
💫 *Section - Downloader* 
*Command :* help-3
*Aliases :* help media

💠 *HELP SECTION 4* 🌀
💫 *Section - owner* 
*Command :* help-4
*Aliases :* help owner


💠 *HELP SECTION 5* 🌀
💫 *Section - Admins* 
*Command :* help-5
*Aliases :* help admin

💠 *HELP SECTION 6* 🌀
💫Section - info
*Command :* help-6
*Aliases :* help info


`.trim()) // Tambah sendiri kalo mau
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^help$/i
// handler.customPrefix = /^.*help ?1$/i

module.exports = handler
