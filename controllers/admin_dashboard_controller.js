const models = require('../models/index')
const sequelize = require('sequelize')

const controller = {
    show: async (req, res) => {
        const numOfGarage = await models.NhaXe.count();
        const numOfTrip = await models.ChuyenXe.count();
        res.locals.numOfGarage = numOfGarage;
        res.locals.numOfTrip = numOfTrip;
        res.render('admin_dashboard', { styleLink: "/admin/assets/css/Admin.css", layout: "admin_layout1" });
    }
}
module.exports = controller;