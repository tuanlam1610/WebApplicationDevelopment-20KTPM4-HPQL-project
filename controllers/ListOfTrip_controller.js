const models = require('../models')
const { Op, DATEONLY } = require("sequelize");
const sequelize = require('sequelize')

const controller = {
    show: async (req, res) => {
        var tpdi = req.query.StartDestination;
        var tpden = req.query.EndDestination;
        var soGhe = req.query.seatNum;
        var giaVe = req.query.ticketPrice;
        var tennhaxe = req.query.garageName;
        var loaiGhe = req.query.typeSeat;
        var ngayKhoiHanh = req.query.startDate;
        const PriceOption = {"1": [0,100000], "2":[100000,300000], "3":[300000,500000], "4": [500000,1000000]}
        const TypeSeatOption = {"1": "Ghế ngồi", "2": "Giường nằm", "3": "Giường đôi"}
        var query = {
            include:[{
                model: models.NhaXe,
                attributes: ['ID_NX', 'tennhaxe'],
                where: {},
                require: true
            }],
            where:{},
            order:[]
        }
        // Where Clause
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
        if (req.query.startDate){
            const date = req.query.startDate.split('/')[0];
            const month = req.query.startDate.split('/')[1];
            const year = req.query.startDate.split('/')[2];
            var dateStart = new Date(year + '-' + month + '-' + date);
            dateStart = dateStart.toISOString().split('T')[0];
            query.where.gioKhoiHanh = sequelize.where(sequelize.cast(sequelize.col('gioKhoiHanh'), 'date'), '=', dateStart);
        }
        else {
            var currentDate = new Date();
            currentDate = currentDate.toISOString().split("T")[0];
            query.where.gioKhoiHanh = sequelize.where(sequelize.cast(sequelize.col('gioKhoiHanh'), 'date'), '>=', currentDate);
        }
        //Order Clause
        let sort = req.query.sort || 'timeAsc';
        let orders = {
            priceAsc: ['giaVe', 'ASC'],
            priceDesc: ['giaVe', 'DESC'],
            timeAsc: ['gioKhoiHanh', 'ASC'],
            timeDesc: ['gioKhoiHanh', 'DESC']
        }
        query.order.push(orders[sort]);
        // Paginate Setting
        let page = req.query.page || 1;
        let limit = 7;
        query.limit = limit;
        query.offset = limit * (page - 1);
        let {rows, count} = await models.ChuyenXe.findAndCountAll(query);
        res.locals.trips = rows;
        console.log(rows);
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }
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