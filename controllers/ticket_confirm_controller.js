const models = require('../models/index')

const controller = {

    show: async (req, res) => {
        var tripID = req.query.tripID;
        var loaiGhe = req.query.typeSeat;
        var emptySeats = req.query.soGheTrong;
        var chosenNum = req.query.soGheChon;
        var chosenSeats = req.query.gheChon;

        var queryChuyenXe = {
            attributes: ['tpDi', 'tpDen', 'gioKhoiHanh', 'gioKetThuc', 'soGheTrong', 'giaVe'],
            where: {},
            raw: true
        }
        if (tripID) {
            queryChuyenXe.where.IDChuyenXe = tripID;
        }

        tripsInfoQuery = await models.ChuyenXe.findOne(queryChuyenXe);
        res.locals.tripInfo = tripsInfoQuery;
        res.locals.IDChuyenXe = tripID;
        res.locals.loaiXe = loaiGhe;
        res.locals.soGheTrong = emptySeats;
        res.locals.soGheChon = chosenNum;

        res.locals.listGhe = chosenSeats;
        //console.log(chosenSeats);
        var seatsList = chosenSeats.split("-");
        //console.log(seatsList);
        seatsList.shift();
        //console.log(seatsList);
        res.locals.gheChon = seatsList;

        res.render('ticket_confirm', { styleLink: "/assets/css/dvx-style.css" });
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
controller.editTicketInfo = async (req, res) => {

    chosenSeats = req.body.viTriGhe;
    //console.log(chosenSeats);
    var seatsList = chosenSeats.split("-");
    //console.log(seatsList);
    seatsList.shift();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day}`;
    //Info Chuyen Xe
    let newInfoCX = {
        soGheTrong: req.body.soGheTrong
    }
    //Info Ghe Chuyen Xe
    let newInfoGCX = {
        trangThaiGhe: true
    }
    //Info Ve Xe
    let newInfoVX = {
    }

    let newInfoLSDV = {
        ID_TK: 1,
        thoigiandat: currentDate,
        trangThaiVe: "Đã Đặt"
    }
    // let info = await models.TaiKhoan.findByPk(1);
    // info.hoten = req.body.hoten;
    // info.save();

    await models.ChuyenXe.update(newInfoCX, {
        where: {
            IDChuyenXe: req.body.IDChuyenXe,
        }
    });
    for (const seatLocation of seatsList) {
        await models.GheChuyenXe.update(newInfoGCX, {
            where: {
                IDChuyenXe: req.body.IDChuyenXe,
                viTriGhe: seatLocation // need to convert to loop
            }
        });

        await models.VeXe.create({
            IDChuyenXe: req.body.IDChuyenXe,
            viTriGhe: seatLocation
        }, {

        });
    };

    /*await models.LichSuDatVe.update(newInfoLSDV, {
        where: {
            ID_TK: req.body.IDChuyenXe,
            ID_Ve: req.body.ID_Ve
        }
    });*/
    //res.redirect();
}

module.exports = controller;