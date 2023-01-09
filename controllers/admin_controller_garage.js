const models = require('../models/index')

const controller = {
    addNewGarage: async (req, res) => {
        letmsg = "";
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
        letmsg = "";
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
            const addGarage = await models.NhaXe.update(updateGarage, {
                where: {
                    ID_NX: req.params.id
                }
            });
            msg = {
                result: "Thêm thành công!",
                sign: "1",
            }
        } catch (err) {
            // const errObj = {};
            // err.errors.map(er => {
            //     errObj[er.path] = er.message;
            // })
            if (updateGarage.sdt.length > 10){
                msg = {
                    result: "Số điện thoại không được dài quá 10 ký tự!",
                    sign: "0",
                }
                status = 400;
            }
            else{
                msg = {
                    result: "Thêm thất bại!",
                    sign: "0",
                }
                status = 500;
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(status).send(JSON.stringify(msg));
    }
}
module.exports = controller;