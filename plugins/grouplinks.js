let handler = async m => m.reply('your message', m.sender)


handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^support$/i
// handler.customPrefix = /^.*help ?1$/i

module.exports = handler