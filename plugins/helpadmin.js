let handler = async m => m.reply(`

🔗 *Admins commands*🔗

💝 *Command* : add number
*usage :* adds the following number to the group
*alternative :* + number

💝 *Command :* Demote/promote
*Usage :* Makes user admin/ removes user adminship
*alternative :* admin @mention

💝 *Command :* kick @mention 
*Usage :* kicks the mentioned user
*alternative :* - @mention


`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-5|admin)$/i


module.exports = handler