const axios = require('axios')


let handler = async(m, { conn, args  , usedPrefix, command }) =>{
    if(!args[0]) throw ' provide atleast two arguemnet'
    if(!args[1]) throw ' provide atleast two arguemnet'
    

try{

let api = axios.get(`https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${args[0]}&to_currency=${args[1]}&apikey=RU7JT201657SUB20`)
 let body = await api
 let Data = body.data
 let Realtime_EXR = Data["Realtime Currency Exchange Rate"]


 let From_currencyCODE = Realtime_EXR['1. From_Currency Code']
 let From_currency_fullname = Realtime_EXR['2. From_Currency Name']
 let to_currencyCODE = Realtime_EXR['3. To_Currency Code']
 let to_currencyfullname = Realtime_EXR['4. To_Currency Name']
 let exchangeRate = Realtime_EXR['5. Exchange Rate']
 let lastRefreshed = Realtime_EXR['6. Last Refreshed']
 let timeZone = Realtime_EXR['7. Time Zone']
 let bidPrice = Realtime_EXR['8. Bid Price']
 let AskPrice = Realtime_EXR['9. Ask Price']
// console.log(args)
// console.log(Data)
// console.log(Realtime_EXR)
// console.log(Data)

conn.reply(m.chat,` Exchange Rate : ${From_currencyCODE} to ${to_currencyCODE} \n exchanageRate is ${exchangeRate} ${to_currencyfullname}
                   last refreshed : ${lastRefreshed}`,m)    
} catch {
    // console.log(e)
    throw `wrong country code see ${usedPrefix}currencycodes`

}





}


handler.help = ['exchangeRate']
handler.tags = ['internet']
handler.command = /^exr$/i
module.exports = handler

