var mongoose = require('mongoose');
var Schema  = mongoose.Schema; 


var userModel = Schema({
    name: String,
    surname:String,
    email:String,
    birthday:Date,
    password:String,
    attending_name:String,
    attending_surname:String,
    attending_email:String,
    role:String,
    institucion:{type:Schema.Types.ObjectId,ref:'institucion'},
    subjects:Array,
    grade:{type:Schema.Types.ObjectId,ref:'grade'},
    course:{type:Schema.Types.ObjectId,ref:'course'},
    nivel:String,
    created_at:String,
    updated_at:String
})

module.exports = mongoose.model('user',userModel);
