'use strict'
var express = require('express');

//var auth = require('../middlewares/auth');
var gradeController = require('../controllers/gradeController');
var grade = express.Router();



//grades

grade.post('/',gradeController.createGrade);
/* grade.get('/',gradeController.getgrades);
grade.get('/:id',gradeController.getgrade);
grade.delete('/:id',gradeController.deletegrade);
grade.put('/:id',gradeController.updategrade); */








module.exports = grade