const { sequelize } = require('../models/index');
const models = require('../models/index')

const controller = {

    showBooked: async (req, res) => {
        var booked = {
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
                    model: models.GheChuyenXe,
                    on: {viTriGhe: sequelize.where(sequelize.col("VeXe.viTriGhe"), "=", sequelize.col("GheChuyenXe.viTriGhe")),
                    IDChuyenXe: sequelize.where(sequelize.col("VeXe.IDChuyenXe"), "=", sequelize.col("GheChuyenXe.IDChuyenXe"))},
                    include: [
                        {
                            model: models.ChuyenXe,
                            attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                            required: true,
                        },
                    ],
                    required: true,
                },
            ],
        };

        //Paginate Setting
        let page = req.query.page || 1;
        let limit = 8;
        booked.limit = limit;
        booked.offset = limit * (page - 1);
        let {rows, count} = await models.VeXe.findAndCountAll(booked);
        //console.log(JSON.stringify(rows))
        res.locals.tickets = rows;
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }

        //res.locals.booked = req.query;
        res.render('booked', { styleLink: "/assets/css/LichSuDatVe.css" });
    },

    showFinished: async (req, res) => {

        var finished = {
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
                    model: models.GheChuyenXe,
                    on: {viTriGhe: sequelize.where(sequelize.col("VeXe.viTriGhe"), "=", sequelize.col("GheChuyenXe.viTriGhe")),
                    IDChuyenXe: sequelize.where(sequelize.col("VeXe.IDChuyenXe"), "=", sequelize.col("GheChuyenXe.IDChuyenXe"))},
                    include: [
                        {
                            model: models.ChuyenXe,
                            attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                            required: true,
                        },
                    ],
                    required: true,
                },
            ],
        };

        //Paginate Setting
        let page = req.query.page || 1;
        let limit = 8;
        finished.limit = limit;
        finished.offset = limit * (page - 1);
        let {rows, count} = await models.VeXe.findAndCountAll(finished);
        //console.log(JSON.stringify(rows))
        res.locals.tickets = rows;
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }

        //res.locals.booked = req.query;
        res.render('finished', { styleLink: "/assets/css/LichSuDatVe.css" });
    },

    showCancelled: async (req, res) => {

        var cancelled = {
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
                    model: models.GheChuyenXe,
                    on: {viTriGhe: sequelize.where(sequelize.col("VeXe.viTriGhe"), "=", sequelize.col("GheChuyenXe.viTriGhe")),
                    IDChuyenXe: sequelize.where(sequelize.col("VeXe.IDChuyenXe"), "=", sequelize.col("GheChuyenXe.IDChuyenXe"))},
                    include: [
                        {
                            model: models.ChuyenXe,
                            attributes: ["gioKhoiHanh", "tpDi", "tpDen"],
                            required: true,
                        },
                    ],
                    required: true,
                },
            ],
        };

        //Paginate Setting
        let page = req.query.page || 1;
        let limit = 8;
        cancelled.limit = limit;
        cancelled.offset = limit * (page - 1);
        let {rows, count} = await models.VeXe.findAndCountAll(cancelled);
        //console.log(JSON.stringify(rows))
        res.locals.tickets = rows;
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }

        //res.locals.booked = req.query;
        res.render('cancelled', { styleLink: "/assets/css/LichSuDatVe.css" });
    },
}


module.exports = controller;