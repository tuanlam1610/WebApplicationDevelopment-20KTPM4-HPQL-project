const express = require('express');
const route = express.Router();
const controller = require('../controllers/garage_info_controller');

route.get('/', controller.show);
route.get('/:id', controller.showDetails)
route.post('/addReview/', controller.addComment)

module.exports = route;