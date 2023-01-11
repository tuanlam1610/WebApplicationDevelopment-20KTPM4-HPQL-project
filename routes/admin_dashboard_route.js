const express = require('express');
const route = express.Router();
const controller = require('../controllers/admin_dashboard_controller');

route.get('/', controller.show);

module.exports = route;