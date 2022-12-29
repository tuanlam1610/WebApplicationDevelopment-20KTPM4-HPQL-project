const models = require('../models')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        var tpdi = req.query.StartDestination;
        var tpden = req.query.EndDestination;
        console.log(req.query.ticketPrice);
        var query = {
            order: [["createdAt", "DESC"]],
            include:[{
                model: models.NhaXe,
                attributes: ['ID_NX', 'tennhaxe'],
                require: true
            }],
            where:{}
        }
        if (req.query.StartDestination){
            query.where.tpDi = tpdi;
        }
        if (req.query.EndDestination){
            query.where.tpDen = tpden;
        }
        res.locals.trips = await models.ChuyenXe.findAll(query);
        res.locals.tpDi = await models.ChuyenXe.findAll({
            attributes: ['tpDi'],
            group: ['tpDi']
        });
        res.locals.tpDen = await models.ChuyenXe.findAll({
            attributes: ['tpDen'],
            group: ['tpDen']
        })
        res.locals.query = req.query;
        res.render('ListOfTrip', {styleLink: "/assets/css/ListOfTrip.css"});
    }
}

module.exports = controller;