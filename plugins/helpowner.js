let handler = async m => m.reply(`


🗣️Owner commands🗣️

💝 *Command :* addprem
*Usage :* add User to premium 

💝*Command :* Broadcast [text]
*Usage :* Broadcast a messages 
*alternative :* bc

💝 *Command :* broadcastgroup
*Usage :* Broadcast to all grps
*Alternative :* bcgc

💝 *Command :* deletechat group 
*Usage :* destroys the group
*Alternative :* deletechat group , deletechat all

💝 *Command :* mutechat
*Usage :* Mute the chat / Group only admins
*Alternative :* mutechat all mutechat group

💝 *Command :* enable/disable [option]
*Usage :* Toggle between events 

_O stands for owner_

💗 *Command :* oadd @mention 
*Usage :* adds the user
*Alternative :* o+ @mention

💗*Command :* okick @mention
*Usage :* kick the mentioned user
*alternative :* o- @mention

💗 *Command :* oannouncement [text]
*Usage :* Tag all users
*Alternative :* ohidetag [text] 

💗 *Command :* opromote @mention
*Usage :* Promotes the following user
*alternative :* oadmin @mention , o^ @mention



`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-4|helpowner)$/i
module.exports = handler