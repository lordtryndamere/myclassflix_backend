'use strict'
var express = require('express');

//var auth = require('../middlewares/auth');
var institucionController = require('../controllers/institucionController');
var institucion = express.Router();



//institucions

institucion.post('/',institucionController.createInstitucion);
/* institucion.get('/',institucionController.getinstitucions);
institucion.get('/:id',institucionController.getinstitucion);
institucion.delete('/:id',institucionController.deleteinstitucion);
institucion.put('/:id',institucionController.updateinstitucion); */








module.exports = institucion