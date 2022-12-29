const express = require('express');
const route = express.Router();
const controller = require('../controllers/history_controller');

route.get('/', controller.show);

module.exports = route;