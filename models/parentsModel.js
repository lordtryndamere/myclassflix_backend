var mongoose  = require('mongoose')
var Schema  = mongoose.Schema;


var ParentModel  = Schema({
    name:String,
    surname:String,
    email:String,
    son:{type:Schema.Types.ObjectId,ref:'user'},
    created_at:String,
    updated_at:String
})

module.exports  = mongoose.model('parent',ParentModel)