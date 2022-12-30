const models = require('../models')
const { Op, QueryTypes } = require('sequelize');
const controller = {
    show: async (req, res) => {
        // res.locals.garages = await models.NhaXe.findAll({
        //     order: [["sosaoTB", "DESC"]]
        // });
        var garageName = req.query.garageName;
        var query = {
            order: [["sosaoTB", "DESC"]],
            where: {}
        }
        if(req.query.garageName){
            var regString = "%" + garageName + "%";
            query.where.tennhaxe = {[Op.iLike]: regString};
        }
        // Paginate Setting
        let page = req.query.page || 1;
        let limit = 6;
        query.limit = limit;
        query.offset = limit * (page - 1);
        let {rows, count} = await models.NhaXe.findAndCountAll(query);
        res.locals.garages = rows;
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }
        res.render('ListOfGarage', {styleLink: "/assets/css/ListOfGarage.css"});
    }
}

module.exports = controller;