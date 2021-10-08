let handler = async m => m.reply(`


╭─「 Support link」
│ • Gpay, OVO, Donate [919002370263]
│ • https://github.com/Oreki-san/Eru-Bot
 | • give a star if the project helped u
╰────
`.trim()) // give a star if it helped u
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
