const express = require('express');
const route = express.Router();
const controller = require('../controllers/edit_info_controller');

route.get('/', controller.show);
route.post('/', controller.editAccountInfo);
route.post('/getToken', controller.getToken);

module.exports = route;