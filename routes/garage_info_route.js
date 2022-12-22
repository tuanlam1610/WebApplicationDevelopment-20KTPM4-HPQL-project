const express = require('express');
const route = express.Router();
const controller = require('../controllers/garage_info_controller');

route.get('/', controller.show);
route.get('/:name', controller.showDetails)

module.exports = route;