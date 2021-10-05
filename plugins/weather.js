let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw `Give me a place name!`
  
let res = global.API('http://api.openweathermap.org', '/data/2.5/weather', {
    q: text,
    units: metric,
    appid: 34515da66e6933296a17efc1e895debe,
    language: tr
  })
let text = `
🌸 *Place: ${res.data.name}*
💮 *Country: ${res.data.sys.country}*
🌈 *Weather: ${res.data.weather[0].description}*
🎋 *Temperature: ${res.data.main.temp}°C*
💠 *Minimum Temperature: ${res.data.main.temp_min}°C*
📛 *Maximum Temperature: ${res.data.main.temp_max}°C*
💦 *Humidity: ${res.data.main.humidity}%*\n
🎐 *Wind: ${res.data.wind.speed} km/h*
`.trim()
    conn.sendFile(m.chat, res, text, m, false)
} 
    
    }
handler.help = ['weather [place_name]']
handler.tags = ['internet']
handler.command = /^(weather|wthr)$/i

handler.register = true
handler.fail = null

module.exports = handler
