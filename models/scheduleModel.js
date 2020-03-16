var mongoose = require('mongoose');
var Schema  = mongoose.Schema; 


var scheduleModel = Schema({
    date: String,
    hour:String,
    grade:{type:Schema.Types.ObjectId,ref:'grade'},
    created_at:String,
    updated_at:String

})

module.exports = mongoose.model('schedule',scheduleModel);