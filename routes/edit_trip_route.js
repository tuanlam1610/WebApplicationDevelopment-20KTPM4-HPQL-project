const express = require('express');
const route = express.Router();
const controller = require('../controllers/edit_trip_controller');

route.get('/', controller.show);

module.exports = route;