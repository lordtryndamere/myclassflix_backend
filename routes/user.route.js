'use strict'
var express = require('express');


var userController = require('../controllers/userController');
var user = express.Router();



//users

user.post('/',userController.createUser);
/* user.get('/',userController.getusers);
user.get('/:id',userController.getuser);
user.delete('/:id',userController.deleteuser);
user.put('/:id',userController.updateuser); */








module.exports = user