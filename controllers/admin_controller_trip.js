const models = require('../models/index')
const Op = require('sequelize');
const sequelize = require('sequelize')
const fileUpload = require('express-fileupload');
const fs = require('fs')

const controller = {
    getAllTrips: async (req, res) => {
        var query = {
            include: [{
                model: models.NhaXe,
                attributes: ['ID_NX', 'tennhaxe'],
                where: {},
                require: true
            }],
            where: {},
            order: []
        }
        var currentDate = new Date();
        query.where.gioKhoiHanh = sequelize.where(sequelize.cast(sequelize.col('gioKhoiHanh'), 'date'), '>=', currentDate);
        let rows = await models.ChuyenXe.findAll(query);
        res.locals.row = rows
        res.render('admin_trips', { styleLink: "/admin/assets/css/Admin.css", layout: "admin_layout1" });
    },
    getATrip: async (req,res) =>{
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
        res.render('edit_trip', {styleLink: "/admin/assets/css/AddTrip.css", layout: "admin_layout2"});
    },
    addTrip: async (req, res) => {
        const tienIch = req.body.tienIch.split(',');
        const moTa = req.body.moTa.split(',');
        const diemDon = req.body.diemDon.split(',');
        const diemTra = req.body.diemTra.split(',');
        let tongSoGhe = 0;

        if (req.body.loaiXe === "Giường nằm") {
            tongSoGhe = 36;
        }
        else if (req.body.loaiXe === "Giường đôi") {
            tongSoGhe = 24;
        }
        else {
            tongSoGhe = 45;
        }
        console.log(tienIch);
        let newTrip = {
            ID_NX: req.body.ID_NX,
            moTaChinhSach: moTa,
            diemDon: diemDon,
            diemTra: diemTra,
            tpDi: req.body.tpDi,
            tpDen: req.body.tpDen,
            gioKhoiHanh: req.body.gioKhoiHanh,
            gioKetThuc: req.body.gioKetThuc,
            tongThoiGian: req.body.tongThoiGian,
            loaiXe: req.body.loaiXe,
            tongSoGhe: tongSoGhe,
            soGheTrong: tongSoGhe,
            giaVe: req.body.giaVe,
            tienIch: tienIch
        }
        try {
            const addTrip = await models.ChuyenXe.create(newTrip);
            if (req.files.sampleFile) {
                let sampleFile;
                let uploadPath;

                sampleFile = req.files.sampleFile;
                console.log(sampleFile);
                uploadPath = "/assets/img/trip/" + req.params.id + "/";
                if (!fs.existsSync("." + uploadPath)) {
                    fs.mkdirSync("." + uploadPath);
                }
                if (sampleFile.length > 1) {
                    for (let i of sampleFile) {
                        i.mv("." + uploadPath + i.name, function (err) {
                            if (err) {
                                return res.status(500).send(err);
                            }
                        });
                        await models.ChuyenXe.update(
                            { 'imagePath': sequelize.fn('array_append', sequelize.col('imagePath'), uploadPath + i.name) },
                            { 'where': { 'IDChuyenXe': addTrip.IDChuyenXe } }
                        );
                    }
                }
                else {
                    sampleFile.mv("." + uploadPath + sampleFile.name, function (err) {
                        if (err) {
                            return res.status(500).send(err);
                        }
                    });
                    await models.ChuyenXe.update(
                        { 'imagePath': sequelize.fn('array_append', sequelize.col('imagePath'), uploadPath + sampleFile.name) },
                        { 'where': { 'IDChuyenXe': addTrip.IDChuyenXe } }
                    );
                }
            }
            if (tongSoGhe === 45) {
                for (let i = 1; i <= tongSoGhe; i++) {
                    let ghe = {
                        IDChuyenXe: addTrip.IDChuyenXe,
                        viTriGhe: "A" + i.toString(),
                        trangThaiGhe: false
                    }
                    await models.GheChuyenXe.create(ghe)
                }
            }
            else {
                for (let i = 1; i <= tongSoGhe / 2; i++) {
                    let ghe = {
                        IDChuyenXe: addTrip.IDChuyenXe,
                        viTriGhe: "A" + i.toString(),
                        trangThaiGhe: false
                    }
                    await models.GheChuyenXe.create(ghe)
                }
                for (let i = 1; i <= tongSoGhe / 2; i++) {
                    let ghe = {
                        IDChuyenXe: addTrip.IDChuyenXe,
                        viTriGhe: "B" + i.toString(),
                        trangThaiGhe: false
                    }
                    await models.GheChuyenXe.create(ghe)
                }
            }
        } catch (err) {

        }
        res.send("Hello")
    },
    deleteTrip: async (req, res) => {
        let msg = "";
        try {
            const listVe = await models.VeXe.findAll({
                raw: true,
                where: {
                    IDChuyenXe: req.params.id
                },
                attributes: ["IDVe"]
            })

            console.log(listVe);

            for (let i of listVe) {
                await models.LichSuDatVe.destroy({
                    where: {
                        ID_Ve: i.IDVe
                    }
                })
                await models.VeXe.destroy({
                    where: {
                        IDVe: i.IDVe
                    }
                })
            }
            await models.GheChuyenXe.destroy({
                where: {
                    IDChuyenXe: req.params.id
                }
            })
            await models.ChuyenXe.destroy({
                where: {
                    IDChuyenXe: req.params.id
                }
            })
            msg = {
                result: "Xóa thành công!",
                sign: "1",
            }
        } catch (err) {
            msg = {
                result: "Xóa thất bại!",
                sign: "0",
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(200).send(JSON.stringify(msg));
    },
    updateTrip: async (req, res) => {

    },
    updateTripImg: async (req, res) => {
        let sampleFile;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }

        console.log('req.files >>>', req.files); // eslint-disable-line

        sampleFile = req.files.sampleFile;
        console.log(sampleFile);
        uploadPath = "/assets/img/trip/" + req.params.id + "/";
        if (!fs.existsSync("." + uploadPath)) {
            fs.mkdirSync("." + uploadPath);
        }
        if (sampleFile.length > 1) {
            for (let i of sampleFile) {
                i.mv("." + uploadPath + i.name, function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                });
                await models.ChuyenXe.update(
                    { 'imagePath': sequelize.fn('array_append', sequelize.col('imagePath'), uploadPath + i.name) },
                    { 'where': { 'IDChuyenXe': req.params.id } }
                );
            }
        }
        else {
            sampleFile.mv("." + uploadPath + sampleFile.name, function (err) {
                if (err) {
                    return res.status(500).send(err);
                }
            });
            await models.ChuyenXe.update(
                { 'imagePath': sequelize.fn('array_append', sequelize.col('imagePath'), uploadPath + sampleFile.name) },
                { 'where': { 'IDChuyenXe': req.params.id } }
            );
        }
    }
}
module.exports = controller;