const models = require('../models/index')

const controller = {
    show: async (req, res) => {

        const booked = await models.VeXe.findAll({
            //attributes: ["ID_Ve", "thoigiandatve", "trangthaive"],
            include: [
                {
                    model: models.LichSuDatVe,
                    attributes: ["ID_Ve", "thoigiandat", "trangthaive"],
                    required: true,
                    where: {
                        trangthaive: "Đã đặt",
                        ID_TK: 1,
                    },
                },
                {
                    model: models.ChuyenXe,
                    attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                    required: true,
                },
                // {
                //     model: models.GheChuyenXe,
                //     attributes: ["viTriGhe"],
                //     required: true,
                // },
            ],
        }); 

        const finished = await models.VeXe.findAll({
            //attributes: ["ID_Ve", "thoigiandatve", "trangthaive"],
            include: [
                {
                    model: models.LichSuDatVe,
                    attributes: ["ID_Ve", "thoigiandat", "trangthaive"],
                    required: true,
                    where: {
                        trangthaive: "Đã thanh toán",
                        ID_TK: 1,
                    },
                },
                {
                    model: models.ChuyenXe,
                    attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                    required: true,
                },
            ],
        }); 

        const cancelled = await models.VeXe.findAll({
            //attributes: ["ID_Ve", "thoigiandatve", "trangthaive"],
            include: [
                {
                    model: models.LichSuDatVe,
                    attributes: ["ID_Ve", "thoigiandat", "trangthaive"],
                    required: true,
                    where: {
                        trangthaive: "Đã hủy",
                        ID_TK: 1,
                    },
                },
                {
                    model: models.ChuyenXe,
                    attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                    required: true,
                },
            ],
        }); 

        //console.log(booked)
        res.locals.booked = booked;
        res.locals.finished = finished;
        res.locals.cancelled = cancelled;
        //console.log(JSON.stringify(finished, null, 2));
        res.render('history', {styleLink: "/assets/css/LichSuDatVe.css"});
    }
    
}
module.exports = controller;