var mongoose = require('mongoose');
var app  = require('./app');
var port  = 3700;


mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost:27017/MYCLASSFLIX',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("CONNECTION TO DATABASE SUCCESFULLY");
    app.listen(port,()=>{
        console.log("Server run in port : 3700");        
    })
    
})

.catch((err)=>console.log("Cant coneect to"+err)
)

