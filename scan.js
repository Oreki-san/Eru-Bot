let express = require('express')
let path = require('path')
function connect(conn, PORT) {
    let app = global.app = express()


    app.use(express.static(path.join(__dirname,'/public')))
    app.get('/',(req,res)=> {
        res.sendFile('index.html',{root : __dirname})
        // res.send('getting route /')
    })
    app.get('/main',(req,res)=>{
        res.sendFile('/public/main.html',{root : __dirname})
    })

    app.listen(PORT,()=>{
        console.log(`App listened PORT ${PORT}`)
    })
}
module.exports = connect
