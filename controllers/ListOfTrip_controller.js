const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('ListOfTrip', {styleLink: "/assets/css/ListOfTrip.css"});
    }
}

module.exports = controller;