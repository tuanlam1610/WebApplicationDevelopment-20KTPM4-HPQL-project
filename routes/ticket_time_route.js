const express = require('express');
const route = express.Router();
const controller = require('../controllers/ticket_time_controller');

route.get('/', controller.show);
//route.get('/:id', controller.showDetails);

module.exports = route;