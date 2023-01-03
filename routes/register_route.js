const express = require('express');
const route = express.Router();
const controller = require('../controllers/register_controller');

route.get('/', controller.show);
route.post('/', controller.register)

module.exports = route;