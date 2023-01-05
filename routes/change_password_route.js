const express = require('express');
const route = express.Router();
const controller = require('../controllers/change_password_controller');

route.get('/', controller.show);
route.put('/', controller.changePassword);

module.exports = route;