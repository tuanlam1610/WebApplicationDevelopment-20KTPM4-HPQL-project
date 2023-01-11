const models = require('../models/index');
const fs = require('fs');
const fileUpload = require('express-fileupload');
const { where } = require('sequelize');

const controller = {
    getAllGarage: async (req, res) => {
        var query = {
            order: [["sosaoTB", "DESC"]],
            where: {}
        }
        // Paginate Setting
        let page = req.query.page || 1;
        let limit = 10;
        query.limit = limit;
        query.offset = limit * (page - 1);
        let { rows, count } = await models.NhaXe.findAndCountAll(query);
        res.locals.garages = rows;
        res.locals.pagination = {
            page,
            limit,
            totalRows: count,
        }
        res.render('ListOfGarage', { styleLink: "/assets/css/ListOfGarage.css" });
    },
    addNewGarage: async (req, res) => {
        let msg = "";
        let newGarage = {
            tennhaxe: req.body.tennhaxe,
            doangioithieu: req.body.doangioithieu,
            sdt: req.body.sdt,
            diachi: req.body.diachi,
            email: req.body.email,
            website: req.body.website,
            sosaoTB: 0
        }
        try {
            const addGarage = await models.NhaXe.create(newGarage);
            console.log(addGarage.ID_NX);
            if (req.files || Object.keys(req.files).length != 0) {
                let sampleFile;
                let uploadPath;

                let path = "/assets/img/Garage/" + addGarage.ID_NX + ".png";

                sampleFile = req.files.sampleFile;
                uploadPath = "." + path;
                sampleFile.mv(uploadPath, function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                });
                await models.NhaXe.update({
                    imagepath: path
                }, {
                    where: {
                        ID_NX: addGarage.ID_NX
                    }
                });
            }
            msg = {
                result: "Thêm thành công!",
                sign: "1",
            }
        } catch (err) {
            const errObj = {};
            err.errors.map(er => {
                errObj[er.path] = er.message;
            })
            msg = {
                result: "Thêm thất bại!",
                sign: "0",
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(200).send(JSON.stringify(msg));
    },
    deleteGarage: async (req, res) => {
        let msg = "";
        try {
            //delete comment
            await models.DanhGia.destroy({
                where: {
                    ID_NX: req.params.id
                }
            })
            //update all trip of this garage
            await models.ChuyenXe.update({
                ID_NX: null
            }, {
                where: {
                    ID_NX: req.params.id
                }
            })
            //xóa hình trong file assets/img/garage
            const garageToDelete = await models.NhaXe.findOne({
                where: {
                    ID_NX: req.params.id
                }
            });
            if (garageToDelete.imagepath.length != 0) {
                fs.unlinkSync("." + garageToDelete.imagepath, (err) => {
                    if (err) {
                        res.status(500).send({
                            message: "Could not delete the file. " + err,
                        });
                    }
                });
            }
            //xóa nhà xe trong database
            const deleteGarage = await models.NhaXe.destroy({
                where: {
                    ID_NX: req.params.id
                }
            });
            msg = {
                result: "Thêm thành công!",
                sign: "1",
            }
        } catch (err) {
            const errObj = {};
            err.errors.map(er => {
                errObj[er.path] = er.message;
            })
            msg = {
                result: "Thêm thất bại!",
                sign: "0",
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(200).send(JSON.stringify(msg));
    },
    updateGarage: async (req, res) => {
        let msg = "";
        let status = 200;
        let updateGarage = {
            tennhaxe: req.body.tennhaxe,
            doangioithieu: req.body.doangioithieu,
            sdt: req.body.sdt,
            diachi: req.body.diachi,
            email: req.body.email,
            website: req.body.website
        }
        try {
            const updateGarage = await models.NhaXe.update(updateGarage, {
                where: {
                    ID_NX: req.params.id
                }
            });
            if (req.files || Object.keys(req.files).length != 0) {
                let sampleFile;
                let uploadPath;

                const oldImgPath = await models.NhaXe.findOne({
                    where: {
                        ID_NX: req.params.id
                    },
                    attributes: ["imagepath"]
                });
                console.log(oldImgPath.imagepath);

                console.log('req.files >>>', req.files); // eslint-disable-line

                sampleFile = req.files.sampleFile;
                console.log(sampleFile);
                uploadPath = "." + oldImgPath.imagepath;

                sampleFile.mv(uploadPath, function (err) {
                    if (err) {
                        return res.status(500).send(err);
                    }
                });
            }
            msg = {
                result: "Sửa thành công!",
                sign: "1",
            }
        } catch (err) {
            if (updateGarage.sdt.length > 10) {
                msg = {
                    result: "Số điện thoại không được dài quá 10 ký tự!",
                    sign: "0",
                }
                status = 400;
            }
            else {
                msg = {
                    result: "Thêm thất bại!",
                    sign: "0",
                }
                status = 500;
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(status).send(JSON.stringify(msg));
    },
    deleteImage: async (req, res) => {
        fs.unlink("./assets/img/Test.png", (err) => {
            if (err) {
                res.status(500).send({
                    message: "Could not delete the file. " + err,
                });
            }
            res.status(200).send({
                message: "File is deleted.",
            });
        });
    },
    updateGarageImg: async (req, res) => {
        let sampleFile;
        let uploadPath;

        if (!req.files || Object.keys(req.files).length === 0) {
            res.status(400).send('No files were uploaded.');
            return;
        }

        const oldImgPath = await models.NhaXe.findOne({
            where: {
                ID_NX: req.params.id
            },
            attributes: ["imagepath"]
        });
        console.log(oldImgPath.imagepath);

        console.log('req.files >>>', req.files); // eslint-disable-line

        sampleFile = req.files.sampleFile;
        console.log(sampleFile);
        uploadPath = "." + oldImgPath.imagepath;

        sampleFile.mv(uploadPath, function (err) {
            if (err) {
                return res.status(500).send(err);
            }

            res.send('File uploaded to ' + uploadPath);
        });
    }
}

module.exports = controller;