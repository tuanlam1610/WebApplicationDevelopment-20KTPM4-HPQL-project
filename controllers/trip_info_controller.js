const models = require('../models/index');
const { showDetails } = require('./garage_info_controller');


const controller = {
    show: async (req, res) =>{
        res.render('trip_info', {styleLink: "/assets/css/trip_info.css"});
    },
    showDetails: async (req, res) => {
        const tripFound = await models.ChuyenXe.findOne({
            where:{
                IDChuyenXe: req.params.id
            },
            include:[{
                model: models.NhaXe,
                attributes: ['ID_NX','tennhaxe'],
                require: true
            }
            ]
        })
        res.locals.trip = tripFound;
        res.render('trip_info', {styleLink: "/assets/css/trip_info.css"});
    }
}
module.exports = controller;