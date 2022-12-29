const models = require('../models')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.locals.trips = await models.ChuyenXe.findAll({
            include:[{
                model: models.NhaXe,
                attributes: ['ID_NX', 'tennhaxe'],
                require: true
            }]
        });
        res.render('ListOfTrip', {styleLink: "/assets/css/ListOfTrip.css"});
    }
}

module.exports = controller;