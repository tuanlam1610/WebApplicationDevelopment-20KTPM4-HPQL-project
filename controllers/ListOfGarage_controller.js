const models = require('../models')
const { QueryTypes } = require('sequelize');
const controller = {
    show: async (req, res) => {
        res.locals.garages = await models.NhaXe.findAll();
        res.render('ListOfGarage', {styleLink: "/assets/css/ListOfGarage.css"});
    }
}

module.exports = controller;