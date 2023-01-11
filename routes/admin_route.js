const express = require('express');
const controller = require('../controllers/admin_controller_garage');
const route = express.Router();
const garageController = require('../controllers/admin_controller_garage');
const tripController = require('../controllers/admin_controller_trip');

route.post('/garage/add', garageController.addNewGarage);
route.delete('/garage/delete/:id', garageController.deleteGarage);
route.put('/garage/update/:id', garageController.updateGarage);
route.get('/garage/showAll/', controller.getAllGarage);

route.get('/trip/', tripController.show);
route.delete('/trip/delete/:id', tripController.deleteTrip)
route.post('/trip/addTrip', tripController.addTrip)
route.post('/trip/addTripIMG/:id', tripController.updateTripImg)

module.exports = route;
