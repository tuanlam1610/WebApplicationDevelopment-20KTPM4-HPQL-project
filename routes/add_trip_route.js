const express = require('express');
const route = express.Router();
const controller = require('../controllers/add_trip_controller');

route.get('/', controller.show);

module.exports = route;