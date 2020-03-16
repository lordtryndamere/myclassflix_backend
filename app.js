
var moment  = require('moment');
var express = require('express');
var helmet = require('helmet');
var bodyparser = require('body-parser');
var session = require('express-session');
var http = require('http')
var RedisStore = require('connect-redis')(session)
var redis = require('redis')
var redisClient  = redis.createClient()



var app  = express();
var server  = http.Server(app)



var sessionMiddleware =session({
    store: new RedisStore({client:redisClient}),
    secret :"screet_key",
    resave:false,
    saveUninitialized :true,
    cookie:{expires:moment().add(30,'days').unix(),secure:false}
})

//LOAD FILES ROUTES

var user  = require('./routes/user.route')
var grade  = require('./routes/grade.route')
var course = require('./routes/course.route')
var institution = require('./routes/institucion.route')


//MIDLEWARES
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json());
app.use(sessionMiddleware)
app.use(helmet())




//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY,autorization, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});




// DEFINEDS ROUTES
app.use('/API/users',user);
app.use('/API/grades',grade);
app.use('/API/courses',course);
app.use('/API/institution',institution);

module.exports = server;