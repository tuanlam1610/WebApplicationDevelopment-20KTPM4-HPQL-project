const models = require('../models/index')
const Sequelize = require('sequelize')

const controller = {
    show: async (req, res) => {
        const list_city_start = await models.ChuyenXe.findAll({
            attributes: ['noiBatDau'],
            distinct: true
        })
        const list_city_end = await models.ChuyenXe.findAll({
            attributes: ['noiKetThuc'],
            distinct: true
        })
        const list_garage = await models.NhaXe.findAll({
            attributes: ['tennhaxe','ID_NX','imagepath'],
            limit: 8,
            order: [['sosaoTB', 'DESC']]
        });
        const list_trip = await models.ChuyenXe.findAll({
            attributes: ['IDChuyenXe','noiBatDau','noiKetThuc','imagePath'],
            limit: 4,
            order: [['updatedAt', 'DESC']]
        })
        res.locals.trip = list_trip;
        res.locals.garage = list_garage;
        res.locals.diemBatDau = list_city_start;
        res.locals.diemKetThuc = list_city_end;
        res.render('index', {styleLink: "/assets/css/style.css"});
    },
}
module.exports = controller;