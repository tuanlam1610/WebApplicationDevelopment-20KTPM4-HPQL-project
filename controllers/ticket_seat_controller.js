const models = require('../models/index');
const seatTypeMapBed = require('../views/seatTypeMapBed');
const seatTypeMapDoubleBed = require('../views/seatTypeMapDoubleBed');
const seatTypeMapSeat = require('../views/seatTypeMapSeat');

const controller = {
    show: async (req, res) => {
        var tripID = req.query.tripID;
        var loaiGhe = req.query.typeSeat;
        switch(loaiGhe){
            case "Giường nằm":
                res.locals.seatTypeMap = seatTypeMapBed;
                res.locals.loaiXe = "Giường nằm";
                res.locals.totalSeat = 36;
                break;
            case "Ghế ngồi":
                res.locals.seatTypeMap = seatTypeMapSeat; 
                res.locals.loaiXe = "Ghế ngồi";
                res.locals.totalSeat = 45;
                break;
            case "Giường đôi":
                res.locals.seatTypeMap = seatTypeMapDoubleBed;
                res.locals.loaiXe = "Giường đôi";
                res.locals.totalSeat = 24;
                break;        
        }
        
        
        var query = {
            order: [["viTriGhe", "ASC"]],
            attributes: ['viTriGhe', 'trangThaiGhe'],
            where: {},
            raw: true
        }
        if(tripID){ 
            query.where.IDChuyenXe = tripID;
        }
       
        
        seatsQuery = await models.GheChuyenXe.findAll(query);
        //seatList = JSON.stringify(seatsQuery);
        //console.log(seatList);

        res.locals.seats = seatsQuery;

        var queryChuyenXe = {
            attributes: ['tpDi', 'tpDen', 'gioKhoiHanh', 'gioKetThuc', 'soGheTrong', 'giaVe'],
            where: {},
            raw: true
        }
        if(tripID){ 
            query.where.IDChuyenXe = tripID;
        }
        tripsInfoQuery = await models.ChuyenXe.findOne(queryChuyenXe);
        res.locals.tripInfo = tripsInfoQuery;
        res.locals.IDChuyenXe = tripID;
        //res.locals.tpDi = tripsInfoQuery.tpDi;
       // res.locals.tpDen = tripsInfoQuery.tpDen;
        //res.locals.gioKhoiHanh = tripsInfoQuery.gioKhoiHanh;
        //res.locals.gioKetThuc = tripsInfoQuery.gioKetThuc;
        //res.locals.giaVe = tripsInfoQuery.giaVe;
        //res.locals. = tripsInfoQuery.tpDi;


        res.render('ticket_seat', {styleLink: "/assets/css/dvx-style.css"});
    }
    /*showDetails: async (req, res) => {
        let count = 0;
        const garageFound = await models.NhaXe.findOne({
            where: {
                ID_NX: req.params.id
            }
        });
        console.log(garageFound.ID_NX);
        var listCMT = []
        while(true){
            const cmtFound = await models.DanhGia.findAll(
                {
                    where: {
                        ID_NX: garageFound.ID_NX
                    },
                    include: [{
                        model: models.TaiKhoan,
                        attributes: ['hoten'],
                        require: true
                    }],
                    order: [['ngayDanhGia','DESC']],
                    limit: 2,
                    offset: count
                },
            )
            count += 2
            if (cmtFound.length == 0) break
            else listCMT.push(cmtFound);
        }
        const count_CMT = await models.DanhGia.count({
            where: {
                ID_NX: garageFound.ID_NX
            }
        })
        //res.locals.cmts = cmtFound;
        res.locals.garage = { garageinfo: garageFound, num_of_cmts: count_CMT, cmts: listCMT};
        res.locals.styleLink = "/assets/css/garage_info.css";
        res.render('garage_info');
    }*/
}
module.exports = controller;