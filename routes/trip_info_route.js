const express = require('express');
const route = express.Router();
const controller = require('../controllers/trip_info_controller');

route.get('/', controller.show);
route.get('/:id',controller.showDetails);

module.exports = route;