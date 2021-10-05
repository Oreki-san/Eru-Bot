const axios = require('axios');     
const cheerio = require('cheerio');

const silverURL = "https://www.policybazaar.com/silver-rate/"

let handler = async(m, { conn, args  , usedPrefix, command }) =>{

try {
    const {data} = await axios.get(silverURL);
    const $ = cheerio.load(data);


    const sitetitle = $('title').text().slice(0,55)
    const LastRefreshed= $('.boxyWrap').find('.goldyBox').find('.lastUpdate').html()

    const perGram = $('.boxyWrap').find('.flatgray').find('.wd50').html()
    const perGramprice = $('.boxyWrap').find('.flatgray').find('.right').html()
    const perKilo = $('.boxyWrap').find('.last').find('.wd50').html()
    const perKiloPrice = $('.boxyWrap').find('.last').find('.right').html()



    conn.reply(m.chat,`${sitetitle}\n ${perGram} : ${perGramprice}\n${perKilo}:${perKiloPrice}/n last refreshed : ${LastRefreshed} `,m)



} catch (error) {
    console.log(error)
}






}
handler.help = ['Market']
handler.tags = ['internet']
handler.command = /^silverpr$/i

module.exports = handler

