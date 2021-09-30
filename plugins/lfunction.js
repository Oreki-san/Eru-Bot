const {
  MessageType
} = require("@adiwajshing/baileys")
let handler = m => m

handler.before = async (m, {}) => {
  if (m.isBaileys && m.fromMe) return true
  if (m.mtype == "listResponseMessage") {
      if (m.msg.singleSelectReply.selectedRowId == "rowid1") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'owner',
              buttonText: {
                  displayText: 'Owner'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to get owner number🎀💮",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid4") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'profile',
              buttonText: {
                  displayText: 'Profile'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see your Profile information🎀💮",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)


      } else if (m.msg.singleSelectReply.selectedRowId == "rowid6") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'info',
              buttonText: {
                  displayText: 'info'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see information about bot🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)


      } else if (m.msg.singleSelectReply.selectedRowId == "rowid2") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'support',
              buttonText: {
                  displayText: 'support'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see how can you support us🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid5") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'donations',
              buttonText: {
                  displayText: 'Donations'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see how can you donate us🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid7") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'rules',
              buttonText: {
                  displayText: 'rules'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see rules for using bot🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid26") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'LinuxCMD',
              buttonText: {
                  displayText: 'LinuxCMD'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button get linux terminal commands🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid27") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'bittentechcourses1',
              buttonText: {
                  displayText: 'bittentechcourses1'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button get bitten tech courses🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid28") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'hackingcourses1',
              buttonText: {
                  displayText: 'hackingcourses1'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button get hacking courses🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid15") {
          // send a buttons message!

          const buttons = [{
              buttonId: 'enable antisticker',
              buttonText: {
                  displayText: 'enable antisticker'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to enable antisticker🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid8") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'speed',
              buttonText: {
                  displayText: 'speed'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see bot speed🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid29") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'whoami',
              buttonText: {
                  displayText: 'whoami'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press this button to see who am i🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid30") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'pwd',
              buttonText: {
                  displayText: 'pwd'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press the button below to see present working dierectory🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)
      } else if (m.msg.singleSelectReply.selectedRowId == "rowid31") {
          // send a buttons message!
          const buttons = [{
              buttonId: 'ls',
              buttonText: {
                  displayText: 'ls'
              },
              type: 1
          }, ]

          const buttonMessage = {
              contentText: "🎀💮Press the button below to see plist files and directories🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid13") {
          // send a buttons message!
          const buttons = [{
                  buttonId: 'antilinkenable',
                  buttonText: {
                      displayText: 'Enable Antilink'
                  },
                  type: 1
              },
              {
                  buttonId: 'antilinkdisable',
                  buttonText: {
                      displayText: 'Disable Antilink'
                  },
                  type: 1
              },
          ]

          const buttonMessage = {
              contentText: "🎀💮Press the buttons below to Enable or disable antilink🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid14") {
          // send a buttons message!
          const buttons = [{
                  buttonId: 'antivulgarenable',
                  buttonText: {
                      displayText: 'Enable Antivulgar'
                  },
                  type: 1
              },
              {
                  buttonId: 'antivulgardisable',
                  buttonText: {
                      displayText: 'Disable Antivulgar'
                  },
                  type: 1
              },
          ]

          const buttonMessage = {
              contentText: "🎀💮Press the buttons below to Enable or disable antivulgar🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid33") {
          // send a buttons message!
          const buttons = [{
                  buttonId: 'antistickerenable',
                  buttonText: {
                      displayText: 'Enable Antisticker'
                  },
                  type: 1
              },
              {
                  buttonId: 'antistickerdisable',
                  buttonText: {
                      displayText: 'Disable Antisticker'
                  },
                  type: 1
              },
          ]

          const buttonMessage = {
              contentText: "🎀💮Press the buttons below to Enable or disable antisticker🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      } else if (m.msg.singleSelectReply.selectedRowId == "rowid32") {
          // send a buttons message!
          const buttons = [{
                  buttonId: 'antigrouplinkenable',
                  buttonText: {
                      displayText: 'Enable Antigrouplink'
                  },
                  type: 1
              },
              {
                  buttonId: 'antigrouplinkdisable',
                  buttonText: {
                      displayText: 'Disable Antigrouplink'
                  },
                  type: 1
              },
          ]

          const buttonMessage = {
              contentText: "🎀💮Press the buttons below to Enable or disable antigrouplink🎀💮.",
              buttons: buttons,
              headerType: 1
          }

          const sendMsg = conn.sendMessage(m.chat, buttonMessage, MessageType.buttonsMessage)

      }
  }

}

module.exports = handler