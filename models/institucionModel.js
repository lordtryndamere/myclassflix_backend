var mongoose = require('mongoose');
var Schema  = mongoose.Schema; 


var institucionModel = Schema({
    name: String,
    nit:Number,
    telefono:Number,
    ciudad:String,
    email:String,
    link:String,
    coordinador:String,
    email_coordinador:String,
    telefono_coordinador:String,
    email_institucional:String,
    Suggestions:String,
    created_at:String,
    updated_at:String

})

module.exports = mongoose.model('institucion',institucionModel);