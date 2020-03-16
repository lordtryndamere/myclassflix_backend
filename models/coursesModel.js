var mongoose = require('mongoose');
var Schema  = mongoose.Schema; 


var courseModel = Schema({
    name: String,
    created_at:String,
    updated_at:String

})

module.exports = mongoose.model('course',courseModel);