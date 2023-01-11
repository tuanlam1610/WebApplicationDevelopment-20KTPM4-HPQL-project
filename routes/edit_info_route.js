const express = require('express');
const route = express.Router();
const controller = require('../controllers/edit_info_controller');

route.get('/', controller.show);
route.post('/loadPage',  controller.getToken);
route.post('/', controller.editAccountInfo);


module.exports = route;