const express = require('express');
const route = express.Router();
const controller = require('../controllers/edit_garage_controller');

route.get('/', controller.show);

module.exports = route;