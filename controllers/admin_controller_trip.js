const models = require('../models/index')
const Op = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('account_info', { styleLink: "/assets/css/ThongTinTaiKhoan.css" });
    },
    addTienIch: async (req, res) => {

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
                    where:{
                        IDVe: i.IDVe
                    }
                })
            }
            await models.GheChuyenXe.destroy({
                where:{
                    IDChuyenXe: req.params.id
                }
            })
            await models.ChuyenXe.destroy({
                where:{
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
    }
}
module.exports = controller;