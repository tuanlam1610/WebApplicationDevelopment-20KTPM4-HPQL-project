const models = require('../models')
const { Op } = require("sequelize");

const controller = {
    show: async (req, res) => {
        var tpdi = req.query.StartDestination;
        var tpden = req.query.EndDestination;
        var soGhe = req.query.seatNum;
        var giaVe = req.query.ticketPrice;
        var tennhaxe = req.query.garageName;
        var loaiGhe = req.query.typeSeat;
        const PriceOption = {"1": [0,100000], "2":[100000,300000], "3":[300000,500000], "4": [500000,1000000]}
        const TypeSeatOption = {"1": "Ghế ngồi", "2": "Giường nằm", "3": "Giường đôi"}
        var query = {
            order: [["createdAt", "DESC"]],
            include:[{
                model: models.NhaXe,
                attributes: ['ID_NX', 'tennhaxe'],
                where: {},
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
        if (req.query.seatNum){
            query.where.soGheTrong ={[Op.gte]: soGhe}
        }
        if (req.query.ticketPrice){
            if (giaVe.length == 1){
                query.where.giaVe = {[Op.between]: PriceOption[giaVe[0]]}
            }
            else if (giaVe.length > 1){
                var orArray = [];
                for (let i = 0; i < giaVe.length; i++){
                    orArray.push({
                        [Op.or]:{
                            [Op.between]: PriceOption[giaVe[i]]
                        }
                    })
                }
                query.where.giaVe ={[Op.or]: orArray}
            }
        }
        if (req.query.garageName){
            query.include[0].where.tennhaxe = {
                [Op.like]: '%' + tennhaxe + '%'
            }
        }
        if (req.query.typeSeat){
            var typeArray = [];
            for (let i = 0; i < loaiGhe.length; i++){
                typeArray.push(TypeSeatOption[loaiGhe[i]]);
            }
            query.where.loaiXe = { [Op.in]: typeArray}
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