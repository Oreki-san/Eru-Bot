const {
  MessageType
} = require("@adiwajshing/baileys")
let PhoneNumber = require('awesome-phonenumber')
let handler = m => m
let {
  performance
} = require('perf_hooks')
let {
  sizeFormatter
} = require('human-readable')

handler.before = async (m, {
  isAdmin,
  isBotAdmin
}) => {
  // send a owner no message!
  if (m.isBaileys && m.fromMe) return true
  if (m.mtype == "buttonsResponseMessage") {
      if (m.msg.selectedButtonId == "owner") {
          conn.sendContact(m.chat, '+916302411573', 'KrypsyniX', m)

          // send whoami msg!
      } else if (m.msg.selectedButtonId == "whoami") {
          conn.reply(m.chat, '🎀💮𝙠𝙖𝙡𝙞🎀💮', m)
          // send ls msg!
      } else if (m.msg.selectedButtonId == "ls") {
          conn.reply(m.chat, '🎀💮Website Hacking Penetration Testing & Bug Bounty Hunting🎀💮\n🎀💮hacked.html🎀💮\n🎀💮Pictures🎀💮\n🎀💮Advance Social Engineering🎀💮\n🎀💮hacker🎀💮\n🎀💮Public🎀💮\n🎀💮Android-Virus🎀💮\n🎀💮ipvanish🎀💮\n🎀💮Stitch🎀💮\n🎀💮Bash Scripting🎀💮\n🎀💮knock🎀💮\n🎀💮Templates🎀💮\n🎀💮CybritexBot🎀💮\n🎀💮knockpy_report🎀💮\n🎀💮Udemy - Bug Bounty Android Hacking🎀💮\n🎀💮CybritexBot.zip🎀💮\n🎀💮Masters In Ethical Hacking Course [2 Gb]🎀💮\n🎀💮Udemy - Hands-on Penetration Testing Labs 4.0Desktop🎀💮\n🎀💮Metasploitable2-Linux🎀💮\n🎀💮Udemy - Masters in Ethical Hacking with Android🎀💮\n🎀💮Documents🎀💮\n🎀💮metasploitable-linux-2.0.0.zip🎀💮\n🎀💮Videos🎀💮\n🎀💮Downloads🎀💮\n🎀💮Music\n🎀💮VirtualBox VMs🎀💮\n🎀💮Ethical-Hacking-Mobile-Devices-Platforms🎀💮\n🎀💮MyApp🎀💮\n🎀💮Lucifer Season3🎀💮\n🎀💮Lucifer season4🎀💮', m)
          // send pwd msg!
      } else if (m.msg.selectedButtonId == "pwd") {
          conn.reply(m.chat, '🎀💮/𝘩𝘰𝘮𝘦/𝘬𝘢𝘭𝘪/𝘊𝘺𝘣𝘳𝘪𝘵𝘦𝘹𝘉𝘰𝘵🎀💮', m)



          // send info msg!
      } else if (m.msg.selectedButtonId == "info") {
          conn.reply(m.chat, '🎀💮ᴛʜɪꜱ ʙᴏᴛ ɪꜱ ᴍᴀᴅᴇᴅ ꜰᴏʀ ᴄʏʙᴇʀ ꜱᴇᴄᴜʀɪᴛʏ ʟᴇᴀʀɴᴇʀꜱ.\n💮ᴛʜɪꜱ ʙᴏᴛ ᴄᴏɴᴛᴀɪɴꜱ ᴛᴏᴏ ᴍᴜᴄʜ ʜᴀᴄᴋɪɴɢ ᴄᴏᴜʀꜱᴇꜱ.\n💮ɪᴛ ɪꜱ ᴜɴᴅᴇʀ-ᴄᴏɴꜱᴛʀᴜᴄᴛɪᴏɴ ʏᴇᴛ.\n💮ᴄʀᴇᴅɪᴛ ɢᴏᴇꜱ ᴛᴏ ɴᴀʀᴜᴛᴏᴍᴀ ʙᴏᴛ ꜰɪʟᴇꜱ ᴀɴᴅ ʜᴀᴄᴋᴇʀ ᴀɴᴏɴ ᴀɴᴅ ᴜɴɪᴛᴇᴅ ᴘᴇɴᴛᴇꜱᴛᴇʀ ᴀɴᴅ ᴠᴇɴᴏᴍ ɢʀɪʟʟꜱ ᴄᴏᴍᴍᴜɴɪᴛʏ ꜰᴏʀ ꜱʜᴀʀɪɴɢ ᴄᴏᴜʀꜱᴇꜱ ᴀɴᴅ ʜᴇʟᴘɪɴɢ ᴍᴇ ᴛᴏ ɢᴜɪᴅᴇ ʟᴇᴀʀɴᴇʀꜱ.\n💮ᴏᴜʀ ᴍᴏᴛᴏ ɪꜱ : ᴋɴᴏᴡʟᴇᴅɢᴇ ɪꜱ ꜰʀᴇᴇ.\n💮ᴅᴏɴᴛ ꜰᴏʀɢᴇᴛ ᴛᴏ ᴠɪꜱɪᴛ ᴏᴜʀ ᴄᴏᴍᴍᴜɴɪᴛʏ ɪɴᴄʜᴀʀɢᴇ ꜱɪᴛᴇ \n💮ʟɪɴᴋ :www.cybritex.com\n🎀💮', m)
          // send a donations message!
      } else if (m.msg.selectedButtonId == "donations") {
          conn.reply(m.chat, '🎀💮ᴀʟᴛʜᴏᴜɢʜ ᴡᴇ ᴘʀᴏᴠɪᴅᴇ ꜰʀᴇᴇ ᴄᴏᴜʀꜱᴇ ᴀɴᴅ ᴄᴏɴᴛᴇɴᴛ ᴛᴏ ᴇᴍᴘᴏᴡᴇʀ ʏᴏᴜᴛʜ ᴡɪᴛʜ ꜱᴋɪʟʟꜱ ᴀɴᴅ ᴄʏʙᴇʀ ꜱᴇᴄᴜʀɪᴛʏ ʙᴜᴛ ᴅᴏɴᴀᴛɪᴏɴꜱ ᴀʀᴇ ɴᴇᴇᴅᴇᴅ ᴛᴏ ᴜᴘɢʀᴀᴅᴇ ʙᴏᴛ ꜱᴇʀᴠᴇʀꜱ ᴀɴᴅ ᴛᴏ ᴇɴᴄᴏᴜʀᴀɢᴇ ᴄᴏᴍᴍᴜɴɪᴛʏ\n💮ꜰᴏʀ ᴅᴏɴᴀᴛɪᴏɴꜱ ᴍᴇꜱꜱᴀɢᴇ ᴏᴡɴᴇʀ : wa.me/+923178022596\n🎀💮', m)
          // send a bittentechcourses1 message!
      } else if (m.msg.selectedButtonId == "bittentechcourses1") {
          conn.reply(m.chat, '🎀💮💻BITTEN TECH PRE HACKING COURSE💻🎀💮\n🎀💮[ALL MODULES]🎀💮\n🎀💮🎚Link :-🎀💮\nhttps://mega.nz/folder/41JwSDhY#TpNy1US0kDmttYdhOR-y-A', m)
          // send a rules message!
      } else if (m.msg.selectedButtonId == "rules") {
          conn.reply(m.chat, '🎀💮ᴀꜱ ʏᴏᴜ ᴍɪɢʜᴛ ᴋɴᴏᴡ ᴛʜᴀᴛ ᴛʜɪꜱ ʙᴏᴛ ɪꜱ ᴅᴇᴠᴇʟᴏᴘᴇᴅ ʙʏ ʜᴀᴄᴋᴇʀꜱ ᴀɴᴅ ᴘᴇɴᴛᴇꜱᴛᴇʀꜱ ᴄᴏᴍᴍᴜɴɪᴛʏ ᴀɴᴅ ᴀʟᴏɴɢ ᴡɪᴛʜ ʜᴇʟᴘ ᴏꜰ ᴄʏʙᴇʀ ꜱᴇᴄᴜʀɪᴛʏ ᴇxᴘᴇʀᴛꜱ ꜱᴏ ʏᴏᴜ ꜱʜᴏᴜʟᴅ ꜰᴏʟʟᴏᴡ ꜰᴏʟʟᴏᴡɪɴɢ ʀᴜʟᴇꜱ ᴇʟꜱᴇ ʏᴏᴜ ᴍᴀʏ ɢᴏᴛ ᴛʀᴏᴜʙʟᴇ 🎀💮\n🎀💮1) ᴅᴏɴᴛ ꜱᴘᴀᴍ ɪɴ ʙᴏᴛ ɪɴʙᴏx🎀💮\n🎀💮2)ᴛᴀᴋᴇ 1 ᴍɪɴᴜᴛᴇ ʙʀᴇᴀᴋ ʙᴇꜰᴏʀᴇ ᴜꜱɪɴɢ ɴᴇxᴛ ᴄᴏᴍᴍᴀɴᴅ🎀💮\n🎀💮3)ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ ᴄᴏɴᴛɪɴᴜᴏᴜꜱʟʏ ᴡɪᴛʜᴏᴜᴛ ʙʀᴇᴀᴋ ᴄᴀᴜꜱᴇ ᴇʀʀᴏʀꜱ ɪɴ ʙᴏᴛ ᴀɴᴅ ᴍᴀʏ ᴅᴇꜱᴛʀᴏʏ ʙᴏᴛ 🎀💮\n🎀💮4)ʏᴏᴜ ᴄᴀɴ ᴜꜱᴇ ʙᴏᴛ ɪɴ ɪɴʙᴏx ᴛᴏᴏ🎀💮\n🎀💮5)ᴛʜᴇ ᴄᴏᴜʀꜱᴇꜱ ꜱʜᴀʀᴇ ʙʏ ʙᴏᴛ ᴀʀᴇ ꜰʀᴇᴇ ʏᴏᴜ ᴀʀᴇ ɴᴏᴛ ᴀʟʟᴏᴡᴇᴅ ᴛᴏ ꜱᴇʟʟ ɪᴛ🎀💮\n', m)
          // send a linux cmd message!
      } else if (m.msg.selectedButtonId == "LinuxCMD") {
          conn.reply(m.chat, '🎀💮ᴛᴏᴘ 50 ʟɪɴᴜx ᴄᴏᴍᴍᴀɴᴅꜱ ʏᴏᴜ ᴍᴜꜱᴛ ᴋɴᴏᴡ ᴀꜱ ᴀ ʀᴇɢᴜʟᴀʀ ᴜꜱᴇʀ 🐧🎀💮\n🎀💮1. ʟꜱ - ᴠɪᴇᴡ ᴄᴏɴᴛᴇɴᴛꜱ ᴏꜰ ᴅɪʀᴇᴄᴛᴏʀʏ (ʟɪꜱᴛ)🎀💮\n🎀💮2. ᴘᴡᴅ - ᴘᴀᴛʜ ᴏꜰ ᴛʜᴇ ᴄᴜʀʀᴇɴᴛ ᴅɪʀᴇᴄᴛᴏʀʏ🎀💮\n🎀💮3. ᴄᴅ -  ᴄʜᴀɴɢᴇ ᴅɪʀᴇᴄᴛᴏʀʏɴ🎀💮\n🎀💮4. ᴍᴋᴅɪʀ - ᴍᴀᴋᴇ ɴᴇᴡ ᴅɪʀᴇᴄᴛᴏʀʏ🎀💮\n🎀💮5. ᴍᴠ - ᴍᴏᴠᴇ ꜰɪʟᴇꜱ / ʀᴇɴᴀᴍᴇ ꜰɪʟᴇꜱ🎀💮\n🎀💮6. ᴄᴘ - ᴄᴏᴘʏ ꜰɪʟᴇꜱ🎀💮\n🎀💮7. ʀᴍ - ʀᴇᴍᴏᴠᴇ ꜰɪʟᴇꜱ🎀💮\n🎀💮8. ᴛᴏᴜᴄʜ - ᴄʀᴇᴀᴛᴇ ʙʟᴀɴᴋ ɴᴇᴡ ꜰɪʟᴇ🎀💮\n🎀💮9. ʀᴍᴅɪʀ - ᴅᴇʟᴇᴛᴇ ᴅɪʀᴇᴄᴛᴏʀʏ🎀💮\n🎀💮10. ᴄᴀᴛ - ʟɪꜱᴛ ᴄᴏɴᴛᴇɴᴛ ᴏꜰ ꜰɪʟᴇ ᴛᴏ ᴛᴇʀᴍɪɴᴀʟ🎀💮\n🎀💮11. ᴄʟᴇᴀʀ - ᴄʟᴇᴀʀ ᴛᴇʀᴍɪɴᴀʟ ᴡɪɴᴅᴏᴡ\n🎀💮12. ᴇᴄʜᴏ - ᴍᴏᴠᴇ ᴅᴀᴛᴀ ɪɴᴛᴏ ᴀ ꜰɪʟᴇ🎀💮\n🎀💮13. ʟᴇꜱꜱ - ʀᴇᴀᴅ ᴛᴇxᴛ ꜰɪʟᴇ ᴏɴᴇ ꜱᴄʀᴇᴇɴ ᴀᴛ ᴀ ᴛɪᴍᴇ🎀💮\n1🎀💮4. ᴍᴀɴ - ꜱʜᴏᴡ ᴍᴀɴᴜᴀʟ ᴏꜰ ʟɪɴᴜx ᴄᴏᴍᴍᴀɴᴅꜱ🎀💮\n1🎀💮5. ꜱᴜᴅᴏ - ᴇɴᴀʙʟᴇꜱ ʏᴏᴜ ᴛᴏ ᴘᴇʀꜰᴏʀᴍ ᴛᴀꜱᴋꜱ ᴛʜᴀᴛ ʀᴇQᴜɪʀᴇ ᴀᴅᴍɪɴɪꜱᴛʀᴀᴛɪᴠᴇ ᴏʀ ʀᴏᴏᴛ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ🎀💮\n🎀💮16. ᴛᴏᴘ - ᴛᴀꜱᴋ ᴍᴀɴᴀɢᴇʀ ɪɴ ᴛᴇʀᴍɪɴᴀʟ🎀💮\n🎀💮17. ᴛᴀʀ - ᴜꜱᴇᴅ ᴛᴏ ᴀʀᴄʜɪᴠᴇ ᴍᴜʟᴛɪᴘʟᴇ ꜰɪʟᴇꜱ ɪɴᴛᴏ ᴀ ᴛᴀʀʙᴀʟʟ🎀💮\n🎀💮18. ɢʀᴇᴘ - ᴜꜱᴇᴅ ᴛᴏ ꜱᴇᴀʀᴄʜɪɴɢ ᴡᴏʀᴅꜱ ɪɴ ꜱᴘᴇᴄɪꜰɪᴄ ꜰɪʟᴇꜱ🎀💮\n🎀💮19. ʜᴇᴀᴅ - ᴠɪᴇᴡ ꜰɪʀꜱᴛ ʟɪɴᴇꜱ ᴏꜰ ᴀɴʏ ᴛᴇxᴛ ꜰɪʟᴇ🎀💮\n🎀💮20. ᴛᴀɪʟ - ᴠɪᴇᴡ ʟᴀꜱᴛ ʟɪɴᴇꜱ ᴏꜰ ᴀɴʏ ᴛᴇxᴛ ꜰɪʟᴇ🎀💮\n🎀💮21. ᴅɪꜰꜰ - ᴄᴏᴍᴘᴀʀᴇꜱ ᴛʜᴇ ᴄᴏɴᴛᴇɴᴛꜱ ᴏꜰ ᴛᴡᴏ ꜰɪʟᴇꜱ ʟɪɴᴇ ʙʏ ʟɪɴᴇ\n🎀💮22. ᴋɪʟʟ - ᴜꜱᴇᴅ ꜰᴏʀ ᴋɪʟʟɪɴɢ ᴜɴʀᴇꜱᴘᴏɴꜱɪᴠᴇ ᴘʀᴏɢʀᴀᴍ\n🎀💮23. ᴊᴏʙꜱ - ᴅɪꜱᴘʟᴀʏ ᴀʟʟ ᴄᴜʀʀᴇɴᴛ ᴊᴏʙꜱ ᴀʟᴏɴɢ ᴡɪᴛʜ ᴛʜᴇɪʀ ꜱᴛᴀᴛᴜꜱᴇꜱ🎀💮\n🎀💮24. ꜱᴏʀᴛ - ɪꜱ ᴀ ᴄᴏᴍᴍᴀɴᴅ ʟɪɴᴇ ᴜᴛɪʟɪᴛʏ ꜰᴏʀ ꜱᴏʀᴛɪɴɢ ʟɪɴᴇꜱ ᴏꜰ ᴛᴇxᴛ ꜰɪʟᴇꜱ🎀💮\n🎀💮25. ᴅꜰ - ɪɴꜰᴏ ᴀʙᴏᴜᴛ ꜱʏꜱᴛᴇᴍ ᴅɪꜱᴋ\n🎀💮26. ᴅᴜ - ᴄʜᴇᴄᴋ ʜᴏᴡ ᴍᴜᴄʜ ꜱᴘᴀᴄᴇ ᴀ ꜰɪʟᴇ ᴏʀ ᴅɪʀᴇᴄᴛᴏʀʏ ᴛᴀᴋᴇꜱ\n🎀💮27. ᴢɪᴘ - ᴛᴏ ᴄᴏᴍᴘʀᴇꜱꜱ ʏᴏᴜʀ ꜰɪʟᴇꜱ ɪɴᴛᴏ ᴀ ᴢɪᴘ ᴀʀᴄʜɪᴠᴇ🎀💮\n🎀💮28. ᴜɴᴢɪᴘ - ᴛᴏ ᴇxᴛʀᴀᴄᴛ ᴛʜᴇ ᴢɪᴘᴘᴇᴅ ꜰɪʟᴇꜱ ꜰʀᴏᴍ ᴀ ᴢɪᴘ ᴀʀᴄʜɪᴠᴇ🎀💮\n🎀💮29. ꜱꜱʜ - ᴀ ꜱᴇᴄᴜʀᴇ ᴇɴᴄʀʏᴘᴛᴇᴅ ᴄᴏɴɴᴇᴄᴛɪᴏɴ ʙᴇᴛᴡᴇᴇɴ ᴛᴡᴏ ʜᴏꜱᴛꜱ ᴏᴠᴇʀ ᴀɴᴅ ɪɴꜱᴇᴄᴜʀᴇ ɴᴇᴛᴡᴏʀᴋ🎀💮\n🎀💮30. ᴄᴀʟ - ꜱʜᴏᴡꜱ ᴄᴀʟᴇɴᴅᴀʀ🎀💮\n🎀💮31. ᴀᴘᴛ - ᴄᴏᴍᴍᴀɴᴅ ʟɪɴᴇ ᴛᴏᴏʟ ꜰᴏʀ ɪɴᴛᴇʀᴀᴄᴛɪᴏɴ ᴡɪᴛʜ ᴘᴀᴄᴋᴀɢɪɴɢ ꜱʏꜱᴛᴇᴍ🎀💮\n🎀💮32. ᴀʟɪᴀꜱ - ᴄᴜꜱᴛᴏᴍ ꜱʜᴏʀᴛᴄᴜᴛꜱ ᴜꜱᴇᴅ ᴛᴏ ʀᴇᴘʀᴇꜱᴇɴᴛ ᴀ ᴄᴏᴍᴍᴀɴᴅ\n🎀💮33. ᴡ - ᴄᴜʀʀᴇɴᴛ ᴜꜱᴇʀ ɪɴꜰᴏ🎀💮\n🎀💮34. ᴡʜᴇʀᴇɪꜱ - ᴜꜱᴇᴅ ᴛᴏ ʟᴏᴄᴀᴛᴇ ᴛʜᴇ ʙɪɴᴀʀʏ, ꜱᴏᴜʀᴄᴇ, ᴍᴀɴᴜᴀʟ ᴘᴀɢᴇ ꜰɪʟᴇꜱ🎀💮\n🎀💮35. ᴡʜᴀᴛɪꜱ - ᴜꜱᴇᴅ ᴛᴏ ɢᴇᴛ ᴏɴᴇ-ʟɪɴᴇ ᴍᴀɴ ᴘᴀɢᴇ ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ🎀💮\n🎀💮36. ᴜꜱᴇʀᴀᴅᴅ - ᴜꜱᴇᴅ ᴛᴏ ᴄʀᴇᴀᴛᴇ ᴀ ɴᴇᴡ ᴜꜱᴇʀ🎀💮\n🎀💮37. ᴘᴀꜱꜱᴡᴅ - ᴜꜱᴇᴅ ᴛᴏ ᴄʜᴀɴɢɪɴɢ ᴘᴀꜱꜱᴡᴏʀᴅ ᴏꜰ ᴄᴜʀʀᴇɴᴛ ᴜꜱᴇʀ🎀💮\n🎀💮38. ᴡʜᴏᴀᴍɪ - ᴘʀɪɴᴛ ᴄᴜʀʀᴇɴᴛ ᴜꜱᴇʀ🎀💮\n🎀💮39. ᴜᴘᴛɪᴍᴇ - ᴘʀɪɴᴛ ᴄᴜʀʀᴇɴᴛ ᴛɪᴍᴇ ᴡʜᴇɴ ᴍᴀᴄʜɪɴᴇ ꜱᴛᴀʀᴛꜱ🎀💮\n🎀💮40. ꜰʀᴇᴇ - ᴘʀɪɴᴛ ꜰʀᴇᴇ ᴅɪꜱᴋ ꜱᴘᴀᴄᴇ ɪɴꜰᴏ🎀💮\n🎀💮41. ʜɪꜱᴛᴏʀʏ - ᴘʀɪɴᴛ ᴜꜱᴇᴅ ᴄᴏᴍᴍᴀɴᴅꜱ ʜɪꜱᴛᴏʀʏ\n🎀💮42. ᴜɴᴀᴍᴇ - ᴘʀɪɴᴛ ᴅᴇᴛᴀɪʟᴇᴅ ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ ᴀʙᴏᴜᴛ ʏᴏᴜʀ ʟɪɴᴜx ꜱʏꜱᴛᴇᴍ🎀💮\n🎀💮43. ᴘɪɴɢ - ᴛᴏ ᴄʜᴇᴄᴋ ᴄᴏɴɴᴇᴄᴛɪᴠɪᴛʏ ꜱᴛᴀᴛᴜꜱ ᴛᴏ ᴀ ꜱᴇʀᴠᴇʀ🎀💮\n🎀💮44. ᴄʜᴍᴏᴅ - ᴛᴏ ᴄʜᴀɴɢᴇ ᴘᴇʀᴍɪꜱꜱɪᴏɴꜱ ᴏꜰ ꜰɪʟᴇꜱ ᴀɴᴅ ᴅɪʀᴇᴄᴛᴏʀɪᴇꜱ🎀💮\n🎀💮45. ᴄʜᴏᴡɴ - ᴛᴏ ᴄʜᴀɴɢᴇ ᴏᴡɴᴇʀꜱʜɪᴘ ᴏꜰ ꜰɪʟᴇꜱ ᴀɴᴅ ᴅɪʀᴇᴄᴛᴏʀɪᴇꜱ🎀💮\n🎀💮46. ꜰɪɴᴅ - ᴜꜱɪɴɢ ꜰɪɴᴅ ꜱᴇᴀʀᴄʜᴇꜱ ꜰᴏʀ ꜰɪʟᴇꜱ ᴀɴᴅ ᴅɪʀᴇᴄᴛᴏʀɪᴇꜱ\n🎀💮47. ʟᴏᴄᴀᴛᴇ - ᴜꜱᴇᴅ ᴛᴏ ʟᴏᴄᴀᴛᴇ ᴀ ꜰɪʟᴇ, ᴊᴜꜱᴛ ʟɪᴋᴇ ᴛʜᴇ ꜱᴇᴀʀᴄʜ ᴄᴏᴍᴍᴀɴᴅ ɪɴ ᴡɪɴᴅᴏᴡꜱ🎀💮\n🎀💮48. ɪꜰᴄᴏɴꜰɪɢ - ᴘʀɪɴᴛ ɪᴘ ᴀᴅᴅʀᴇꜱꜱ ꜱᴛᴜꜰꜰ🎀💮\n🎀💮49. ɪᴘ ᴀ - ꜱɪᴍɪʟᴀʀ ᴛᴏ ɪꜰᴄᴏɴꜰɪɢ ʙᴜᴛ ꜱʜᴏʀᴛᴇꜱᴛ ᴘʀɪɴᴛ🎀💮\n🎀💮50. ꜰɪɴɢᴇʀ - ɢɪᴠᴇꜱ ʏᴏᴜ ᴀ ꜱʜᴏʀᴛ ᴅᴜᴍᴘ ᴏꜰ ɪɴꜰᴏ ᴀʙᴏᴜᴛ ᴀ ᴜꜱᴇʀ🎀💮', m)
          // send a support message!
      } else if (m.msg.selectedButtonId == "support") {
          conn.reply(m.chat, '🎀💮 ᴠɪꜱɪᴛ ᴏᴜʀ ꜱɪᴛᴇꜱ :\n💮1)www.cybritex.com\n💮2)www.justhacked.tech\n💮3)venomgrills.com\n💮4)freelearningtech.in\n💮5)zaintechorg.blogspot.com', m)
          // send a hackingcourses message!
      } else if (m.msg.selectedButtonId == "hackingcourses1") {
          conn.reply(m.chat, '🎀💮Hacking🎀💮|🎀💮Crack🎀💮|🎀💮Money Making Methods🎀💮|🎀💮Much More🎀💮|🎀💮Megapack🎀💮\nSize : 2GB\n🎀💮Methods : 2000+🎀💮\n🎀💮Link :🎀💮\nhttps://mega.nz/folder/Yop2ACCB\n🎀💮Key :🎀💮\nf16bv7UCbku41LtLtKl8lA\nEnjoy👍🎀💮', m)
          // send a profile message!
      } else if (m.msg.selectedButtonId == "speed") {
          conn.reply(m.chat, "speed")

      } else if (m.msg.selectedButtonId == "antivulgarenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = true;
                  conn.reply(m.chat, "Successfully enabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antivulgardisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiVulgar = false;
                  conn.reply(m.chat, "Successfully disabled antivulgar for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = true;
                  conn.reply(m.chat, "Successfully enabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antilinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiLink = false;
                  conn.reply(m.chat, "Successfully disabled antilink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = true;
                  conn.reply(m.chat, "Successfully enabled Antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antistickerdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiSticker = false;
                  conn.reply(m.chat, "Successfully disabled antisticker for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkenable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = true;
                  conn.reply(m.chat, "Successfully enabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "antigrouplinkdisable") {
          console.log(m.isGroup)
          if (m.isGroup == false) {
              conn.reply(m.chat, "This command can only be used in groups!")
          } else if (m.isGroup == true) {
              if (isAdmin || !isBotAdmin) {
                  let chat = global.DATABASE._data.chats[m.chat]
                  chat.antiGroupLink = false;
                  conn.reply(m.chat, "Successfully disabled antigrouplink for this group")
              } else {
                  conn.reply(m.chat, "This command is only for groups *Admin* !")
              }
          }

      } else if (m.msg.selectedButtonId == "profile") {
          let pp = './src/avatar_contact.png'
          let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
          try {
              pp = await conn.getProfilePicture(who)
          } catch (e) {

          } finally {
              let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
              let {
                  name,
                  lastclaim,
                  registered,
                  regTime,
                  age
              } = global.DATABASE.data.users[who]
              let username = conn.getName(who)
              let str = `
🎀💮ʜᴀᴄᴋᴇʀꜱ ᴀʀᴇ ꜱᴇᴇɴ ᴀꜱ ꜱʜᴀᴅᴏᴡʏ ꜰɪɢᴜʀᴇꜱ ᴡɪᴛʜ ꜱᴜᴘᴇʀʜᴜᴍᴀɴ ᴘᴏᴡᴇʀꜱ ᴛʜᴀᴛ ᴛʜʀᴇᴀᴛᴇɴ ᴄɪᴠɪʟɪᴢᴀᴛɪᴏɴ.💮🎀\n
🎀💮ɴᴀᴍᴇ: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\n🎀💮ᴀʙᴏᴜᴛ: ' + about : ''}🎀💮\n
🎀💮ɴᴜᴍʙᴇʀ: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}🎀💮\n
🎀💮ʟɪɴᴋ: https://wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}\n
🎀💮ʀᴇɢɪꜱᴛᴇʀᴇᴅ: ${registered ? '🎀Yes 🎀(' + new Date(regTime) + ')': '🎀No🎀'}${lastclaim > 0 ? '\n🎀💮ʟᴀꜱᴛ ᴄʟᴀɪᴍ: ' + new Date(lastclaim) : ''}🎀💮\n
🎀💮ᴠᴇʀʏ ꜱᴍᴀʀᴛ ᴘᴇᴏᴘʟᴇ ᴀʀᴇ ᴏꜰᴛᴇɴ ᴛʀɪᴄᴋᴇᴅ ʙʏ ʜᴀᴄᴋᴇʀꜱ, ʙʏ ᴘʜɪꜱʜɪɴɢ.💮🎀\n💮🎀ɪ ᴅᴏɴᴛ ᴇxᴄʟᴜᴅᴇ ᴍʏꜱᴇʟꜰ ꜰʀᴏᴍ ᴛʜᴀᴛ.💮🎀\n🎀💮ɪᴛ'ꜱ ᴀʙᴏᴜᴛ ʙᴇɪɴɢ ꜱᴍᴀʀᴛᴇʀ ᴛʜᴀɴ ᴀ ʜᴀᴄᴋᴇʀ.💮🎀\n🎀💮ɴᴏᴛ ᴀʙᴏᴜᴛ ʙᴇɪɴɢ ꜱᴍᴀʀᴛ.💮🎀
`.trim()
              let mentionedJid = [who]
              conn.sendFile(m.chat, pp, 'pp.jpg', str, m, false, {
                  contextInfo: {
                      mentionedJid
                  }
              })
          }
      }
  }
}

module.exports = handler