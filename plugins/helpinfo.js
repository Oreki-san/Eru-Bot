let handler = async m => m.reply(`
πͺ *Info* πͺ

*Bot :* Eru chitanda

_Note : This is customised bot_
_Edited by : Redbeeπβ€_


π« *Command :* bannedlist
*Usage :* Shows the list of banned user

π« *Command :* owner
*Usage :* To see the owner
*Alternative :* creator

π« *Command :* delete
*Usage :* delete 
*Alternative :* del

π« *Command :* donate
*Usage :* Donate the creator

π« *Command :* groups
*Usage :* To see the List of Groups 
*Alternative :* grouplist

π« *Command :* bug 
*Usage :* if you find any bug or untranslated words please let us know!
*Alternative :* report

π« *Command :* ping
*Usage :* to see Ping
*Alternative :* speed


`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-6|info)$/i
module.exports = handler
