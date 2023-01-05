const express = require('express');
const route = express.Router();
const controller = require('../controllers/history_controller');

//route.get('/', controller.show);
route.get('/booked', controller.showBooked);
route.get('/finished', controller.showFinished);
route.get('/cancelled', controller.showCancelled);

module.exports = route;