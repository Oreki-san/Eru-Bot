let handler = async(m, { conn }) => {

    if(m.quoted?.sender) m.mentionedJid.push(m.quoted.sender)
    if(!m.mentionedJid.length) m.mentionedJid.push(m.sender)
  
 const data = ["https://res.cloudinary.com/bilal-08/video/upload/v1633253496/Media_211003_144829_rt45k0.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253478/Media_211003_144527_yagdvd.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253478/Media_211003_144607_qsmtqy.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253478/Media_211003_144540_kkh6dd.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253472/Media_211003_144532_hb6pqs.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253471/Media_211003_144257_aqw9fl.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253465/Media_211003_144346_u0cb4a.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253462/Media_211003_144515_n9rzqs.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253459/Media_211003_144558_lwsxnj.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253457/Media_211003_144814_fabsqb.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253456/Media_211003_144552_sbas0f.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253454/Media_211003_144331_rcjkty.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253452/Media_211003_144403_hera0s.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253452/Media_211003_144507_y4vbl0.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253451/Media_211003_144845_gwehrh.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253449/Media_211003_144737_qbwmrj.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253448/Media_211003_144458_t8o2lv.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253447/Media_211003_144728_d3auwo.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253444/Media_211003_144521_wnp4ud.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253444/Media_211003_144521_wnp4ud.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253441/Media_211003_144356_aufil0.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253441/Media_211003_144410_yibwhx.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253439/Media_211003_144318_klqlla.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253437/Media_211003_144822_yuqgmh.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253437/Media_211003_144749_aie0hk.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253436/Media_211003_144547_xwhkzo.mp4","https://res.cloudinary.com/bilal-08/video/upload/v1633253432/Media_211003_144435_tclfco.mp4"]
  const HUG = data[Math.floor(Math.random() * data.length)]

  conn.sendFile(m.chat,HUG,'h.gif',`@${m.sender.split('@')[0]} hugged ${m.mentionedJid.map((user)=>(user === m.sender)? 'themselves ': `@${user.split('@')[0]}`).join(', ')}`,m,false,
  { mimetype :'video/gif',  contextInfo :{mentionedJid : [  ...m.mentionedJid,m.sender ] }})
  

}
handler.help = ['neko']
handler.tags = ['internet']
handler.command = /^hug$/i

module.exports = handler
