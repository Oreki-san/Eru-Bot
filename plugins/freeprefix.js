
module.exports = {
    before(m) {
      if (/\b(hi)\b/i.test(m.text)) m.reply('Hello')
      return !0
    }
  }

  module.exports = {
    before(m) {
      if (/\b(baka)\b/i.test(m.text)) m.reply('no u ')
      return !0
    }
  }

  
  // module.exports = {
  //   before(m) {
  //     if (/\b(help)\b/i.test(m.text)) m.reply('Did you mean: /help ?')
  //     return !0
  //   }
  // }