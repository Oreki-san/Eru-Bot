const axios = require('axios')
let handler = async (m, { conn, args  , usedPrefix, command })=>{


if(!args[0]) throw `Please provide the query.`
    try{

        const response = axios.get(`https://newsapi.org/v2/everything?q=${args[0]}&sortBy=popularity&apiKey=81d16038542a42e296e4a6e002212205`)
        const res = await response
        let { author, title, description, url, urlToImage, content } = res.data
        let i = `🎀 Title: ${title}\n❄ Description: ${description}\n📜 Content: ${content}\n✍ Author: ${author}\n\n🌐 URL: ${url}`

        conn.sendFile(m.chat, urlToImage, i, m)
}
    
handler.help = ['news']
handler.tags = ['internet']
handler.command = /^(news|article)$/i

module.exports = handler
