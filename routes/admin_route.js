const express = require('express');
const route = express.Router();
const garageController = require('../controllers/admin_controller_garage');
const tripController = require('../controllers/admin_controller_trip');

route.post('/garage/add', garageController.addNewGarage);
route.delete('/garage/delete/:id', garageController.deleteGarage);
route.put('/garage/update/:id', garageController.updateGarage);

route.get('/trip/', tripController.show);

module.exports = route;
