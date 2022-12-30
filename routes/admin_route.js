const express = require('express');
const route = express.Router();
const garageController = require('../controllers/admin_controller_garage');
const tripController = require('../controllers/admin_controller_trip');

route.get('/garage/', garageController.show);
route.get('/trip/', tripController.show);

module.exports = route;