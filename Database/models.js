const {Schema,model} = require('mongoose')


const sessionSchema = new Schema({
   ID :{
       type : String,
       required : true,
       unique : true
   },
   session :{
       type : Object,
       required : false,
       unique : true
   }


})
module.exports.session = model('Session',sessionSchema)

// const session = new model('Session',sessionSchema)
// module.exports = session