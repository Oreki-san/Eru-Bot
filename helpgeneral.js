let handler = async m => m.reply(`
🤍 *General Section* 🤍

💎 *Command :* afk
*Usage :* sets status as you when you are afk

💎 *Command :* save @mention [Text/name]
*Usage :* Send you a contact msg

💎 *Command :* brainly 
*Usage :* 

💎 *Command :* darkjokes
*Usage :* Give you a darkjoke

💎 *Command :* fetch <url>
*Usage :* Will fetch the url

💎 *Command :* get<url>
*Usage :* 

💎 *Command :* google
*Usage :* Search on google

💎 *Command :* googlef
*Usage :* google finf

💎 *Command :* epep
*Usage :* 

💎 *Command :* lirik
*Usage :* 

💎 *Command :* meme
*Usage :* give you a meme

💎 *Command :* pikachu
*Usage :* 

💎 *Command :* ss
*Usage :* 

💎 *Command :* ssf
*Usage :* 
💎 *Command :* subreddit (sr name)
*Usage :* gives you a image from subreddit 
*Alternative :* sr

💎 *Command :* wallpaperanime 
*Usage :* 

💎*Command :* getsider
*Usage :* 


⚠️ *Please use this Command kindly or otherwise you are banned* 

💎 *Command :* upsw [text] (reply Media) / upsw [text]
*Usage :* Uploads status

`.trim()) 
handler.help = ['help 1']
handler.tags = ['info']
handler.command = /^(help-1|general)$/i


module.exports = handler