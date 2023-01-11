const express = require('express');
const route = express.Router();
const controller = require('../controllers/login_controller');

route.get('/', controller.show);
route.post('/', controller.loginCheck);
module.exports = route;