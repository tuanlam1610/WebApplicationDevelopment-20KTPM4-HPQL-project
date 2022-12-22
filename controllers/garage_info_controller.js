const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('garage_info');
    },
    showDetails: async (req, res) => {
        const garageFound = await models.NhaXe.findOne({
            where: {
                tennhaxe: req.params.name
            }
        });
        console.log(garageFound.ID_NX);
        const cmtFound = await models.DanhGia.findAll(
            {
                where: {
                    ID_NX: garageFound.ID_NX
                },
                limit: 16,
                include: [{
                    model: models.KhachHang,
                    attributes: ['hoten'],
                    require: true
                }]
            },
        )
        //console.log(cmtFound[0].KhachHang);
        //res.locals.cmts = cmtFound;
        res.locals.garage = { garageinfo: garageFound, cmts: cmtFound};
        res.render('garage_info');
    }
}
module.exports = controller;