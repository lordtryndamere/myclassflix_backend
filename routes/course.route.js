'use strict'
var express = require('express');

//var auth = require('../middlewares/auth');
var courseController = require('../controllers/courseController');
var course = express.Router();



//courses

course.post('/',courseController.createCourse);
/* course.get('/',courseController.getcourses);
course.get('/:id',courseController.getcourse);
course.delete('/:id',courseController.deletecourse);
course.put('/:id',courseController.updatecourse); */








module.exports = course