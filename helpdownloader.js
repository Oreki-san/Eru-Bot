let handler = async m => m.reply(`
🌟Downloader command 🌟


🌈 *Command :* ytmp3 (url)
*Usage :* Downloads Audio of yt video
*Alternative :* yta , mp3

🌈 *Command :* ytmp4 (url)
*Usage :* Downloads YT video
*Alternative :* ytv

🌈 *Command :* ytsearch
*Usage :* Search YouTube videos 
*alternative :* yts

🌈 *Command :* fb (url)
*Usage :* Facebook downloader 

🌈 *Command :* ig (url)
*Usage :* Instagram dl

🌈 *Command :* ighighlight [username]
*Usage :* Downloads insta. highlight story

🌈 *Command :* igstalk [username]
*Usage :* Stalk

🌈 *Command :* igstory [username]
*Usage :* insta story dl

🌈 *Command :* play [query]
*Usage :* plays a song

🌈 *Command :* play2 [query]
*Usage :* plays a song


`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-3|downloader|download)$/i
module.exports = handler