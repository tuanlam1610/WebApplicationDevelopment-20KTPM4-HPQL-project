const express = require('express');
const route = express.Router();
const controller = require('../controllers/account_info_controller');

route.get('/', controller.show);
route.post('/', controller.getToken);

module.exports = route;