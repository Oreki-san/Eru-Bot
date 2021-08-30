let handler = async m => m.reply(`
📪 *Info* 📪

*Bot :* Nurutomo/wabot-aq

_Note : This is customised bot_
_Edited by : Redbee🐝❤_


💫 *Command :* bannedlist
*Usage :* Shows the list of banned user

💫 *Command :* owner
*Usage :* To see the owner
*Alternative :* creator

💫 *Command :* delete
*Usage :* delete 
*Alternative :* del

💫 *Command :* donate
*Usage :* Donate the creator

💫 *Command :* groups
*Usage :* To see the List of Groups 
*Alternative :* grouplist

💫 *Command :* bug 
*Usage :* if you find any bug or untranslated words please let us know!
*Alternative :* report

💫 *Command :* ping
*Usage :* to see Ping
*Alternative :* speed


`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-6|info)$/i
module.exports = handler