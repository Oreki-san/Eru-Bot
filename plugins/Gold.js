const axios = require('axios');     
const cheerio = require('cheerio');
const fs = require('fs');


let handler = async (m, { conn, args  , usedPrefix, command })=>{

    const url = "https://www.policybazaar.com/gold-rate/"
   
    
        try{
            const {data} = await axios.get(url);
            const $ = cheerio.load(data);
    
             
        const siteHeading = await $('title').text()
        const Gold24_key = $('.boxyWrap').find('.last').find('.wd50').html()
        const Gold24_price = $('.boxyWrap').find('.last').find('.right').html()
        const Gold22_key = $('.boxyWrap').find('.flatgray').find('.wd50').html()
        const Gold22_price = $('.boxyWrap').find('.flatgray').find('.right').html()
        const Last_Refreshed = $('.boxyWrap').find('.goldyBox').find('.lastUpdate').html()
        const MCX  = $('.boxyWrap').find('.mcx').html().replace('<br>','')
          
   
        conn.reply(m.chat,`${siteHeading}\n ${MCX} ${Gold24_key} : ${Gold24_price}\n${Gold22_key}:${Gold22_price}/n last refreshed : ${Last_Refreshed} `,m)


}catch(e) {

   console.error(e)
}}
handler.help = ['Market']
handler.tags = ['internet']
handler.command = /^goldpr$/i

module.exports = handler

