const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('ListOfGarage', {styleLink: "/assets/css/ListOfGarage.css"});
    }
}

module.exports = controller;