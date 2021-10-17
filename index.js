console.log('Starting...')
const mongoose = require('mongoose')
require('dotenv').config();
const ID = process.env.ID//'chotaku';//'nekoda'//
console.log('index me id :' +ID)
const {session} = require('./Database/models')
mongoose.connect(encodeURI(process.env.MONGO_URI)), {
    useNewUrlParser: true,
    useUnifiedTopology: true
   // useCreateIndex: true
};
const db = mongoose.connection
let { spawn } = require('child_process')
let path = require('path')
let fs = require('fs')
let package = require('./package.json')
const CFonts  = require('cfonts')

db.once('open',async ()=>{
  console.log('Connected to database')

const find = await session.findOne({ID})
if (find===null) {
console.log('id nahi mili ok')
} else {
fs.writeFileSync(`./${ID}.data.json`,JSON.stringify(find.session,null,'\t'))
}
})
CFonts.say('Lightweight\nWhatsApp Bot', {
  font: 'chrome',
  align: 'center',
  gradient: ['red', 'magenta']
})
CFonts.say(`'${package.name}' By @${package.author.name || package.author}`, {
  font: 'console',
  align: 'center',
  gradient: ['red', 'magenta']
})

/**
 * Start a js file
 * @param {String} file `path/to/file`
 */
function start(file) {
  let args = [path.join(__dirname, file), ...process.argv.slice(2)]
  CFonts.say([process.argv[0], ...args].join(' '), {
    font: 'console',
    align: 'center',
    gradient: ['red', 'magenta']
  })
  let p = spawn(process.argv[0], args, {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })
  p.on('message', data => {
    console.log('[RECEIVED]', data)
    switch (data) {
      case 'reset':
        p.kill()
        start.apply(this, arguments)
        break
      case 'uptime':
        p.send(process.uptime())
        break
    }
  })
  p.on('exit', code => {
    console.error('Exited with code:', code)
    if (code === 0) return
    fs.watchFile(args[0], () => {
      fs.unwatchFile(args[0])
      start(file)
    })
  })
  // console.log(p)
}

start('main.js')
