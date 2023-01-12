const express = require('express');
const controller = require('../controllers/admin_controller_garage');
const route = express.Router();
const garageController = require('../controllers/admin_controller_garage');
const tripController = require('../controllers/admin_controller_trip');
const dashboard = require('../controllers/admin_dashboard_controller');

route.post('/garage/add', garageController.addNewGarage);
route.get('/garage/add/', garageController.showAddGarageScreen)
route.delete('/garage/delete/:id', garageController.deleteGarage);
route.get('/garage/:id', garageController.getAGarage);
route.put('/garage/update/:id', garageController.updateGarage);
route.get('/garage/', controller.getAllGarage);

route.get('/trip/', tripController.show);
route.delete('/trip/delete/:id', tripController.deleteTrip)
route.post('/trip/add', tripController.addTrip)
route.post('/trip/addTripIMG/:id', tripController.updateTripImg)
route.get('/dashboard/', dashboard.show)

module.exports = route;
