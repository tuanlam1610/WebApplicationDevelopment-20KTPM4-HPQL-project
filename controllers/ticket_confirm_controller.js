const models = require('../models/index')
const nodemailer = require('nodemailer');
const moment = require('moment');
const TokenManager = require('../middleware/token');
var accountID = 0;

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'hpqlgroup@gmail.com',
        pass: 'tcmfopsfukzyvnsc'
    }
});


function formatDate(datetime, format) {
    if (moment) {
        // can use other formats like 'lll' too
        return moment(datetime).format(format);
      }
      else {
        return datetime;
    }
}

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
    //account id
    const decode  = TokenManager.TokenDecode(req.body.accessToken, req.body.refreshToken);
    console.log(decode);
    accountID = decode.ID_TK;
    accountEmail = decode.email;

    chosenSeats = req.body.viTriGhe;
    //console.log(chosenSeats);
    var seatsList = chosenSeats.split("-");
    //console.log(seatsList);
    seatsList.shift();

    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    
    let hour = date.getHours();
    let minute = date.getMinutes();
    let seconds = date.getSeconds();

    // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${year}-${month}-${day} ${hour}:${minute}:${seconds}`;
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
        ID_TK: accountID,
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

        var queryVeXe = {
            attributes: ['ID_Ve', 'IDChuyenXe', 'viTriGhe'],
            where: { IDChuyenXe: req.body.IDChuyenXe, viTriGhe: seatLocation },
            raw: true
        }
        veXeQuery = await models.VeXe.findOne(queryVeXe);

        await models.LichSuDatVe.create({
            ID_TK: accountID,
            ID_Ve: veXeQuery.ID_Ve,
            thoigiandat: currentDate,
            trangthaive: "Đã đặt"
        }, {

        });
    };

    //send email
    let seatListHTML = "";
    let idListHTML = "";
    for (const seatLocation of seatsList){
        seatListHTML = seatListHTML + seatLocation + " ";

        var queryVeXe = {
            attributes: ['ID_Ve', 'IDChuyenXe', 'viTriGhe'],
            where: { IDChuyenXe: req.body.IDChuyenXe, viTriGhe: seatLocation },
            raw: true
        }
        veXeQuery = await models.VeXe.findOne(queryVeXe);
        idListHTML = idListHTML + veXeQuery.ID_Ve + " "
    }

    var tripID = req.body.IDChuyenXe;
    var queryChuyenXe = {
        attributes: ['tpDi', 'tpDen', 'gioKhoiHanh', 'gioKetThuc', 'loaiXe', 'tongThoiGian'],
        where: {},
        raw: true
    }
    if (tripID) {
        queryChuyenXe.where.IDChuyenXe = tripID;
    }
    tripsInfoQuery = await models.ChuyenXe.findOne(queryChuyenXe);

    tripDate = formatDate(tripsInfoQuery.gioKhoiHanh, "hh:mm - DD/MM/yyyy")
    var mailOptions = {
        from: 'hpqlgroup@gmail.com',
        to: accountEmail,
        subject: 'Bus Ticket Order Received - Waiting For Payment',
        text: 'That was easy!',
        html:"<div style='width: 1000px; margin:0.25rem; padding: 0.5rem; border-style: solid; border-color:#4F98CA; border-width: 2px; border-radius: 0.5rem;'>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Mã vé của bạn là:  <span style='font-weight:600; color:#4F98CA;'>"+ idListHTML +"</span></div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Bạn đã đặt <span style='font-weight:600; color:#4F98CA;'>"+  req.body.soGheChon  +"</span> vé </div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Số tiền cần thanh toán: <span style='font-weight:600; color:#4F98CA;'>"+  req.body.tongGia  +"</span></div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Mã ghế: <span style='font-weight:600; color:#4F98CA;'>"+ seatListHTML +"</span> </div>"
             +"</div>"
             +"<div style='width: 1000px; margin:0.25rem; padding: 0.5rem; border-style: solid; border-color:#4F98CA; border-width: 2px; border-radius: 0.5rem;'>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Giờ khởi hành:  <span style='font-weight:600; color:#4F98CA;'>"+ tripDate +"</span></div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Điểm khởi hành <span style='font-weight:600; color:#4F98CA;'>"+ tripsInfoQuery.tpDi   +"</span></div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Điểm đến: <span style='font-weight:600; color:#4F98CA;'>"+  tripsInfoQuery.tpDen   +"</span></div>"
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Tổng thời gian: <span style='font-weight:600; color:#4F98CA;'>"+  tripsInfoQuery.tongThoiGian  +"</span></div>" 
             +"<div style='font-weight: 400; font-size: 1.25rem; color: black;'>Loại xe: <span style='font-weight:600; color:#4F98CA;'>"+  tripsInfoQuery.loaiXe   +"</span></div>"
             +"</div>"
             +"<div style='font-weight: 600; font-size: 2rem; color: black;'>HPQL GROUP <div>"
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });

    res.redirect("/");
}

module.exports = controller;