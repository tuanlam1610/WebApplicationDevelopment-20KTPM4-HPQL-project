const models = require('../models')
const { Op, DATEONLY } = require("sequelize");
const sequelize = require('sequelize')
const TokenManager = require('../middleware/token');
var accountID = 0;

const controller = {
    show: async (req, res) => {
        res.locals.accountInfo = await models.TaiKhoan.findAll({
            attributes: [
                "ID_TK",
                "hoten",
                "email",
                // [
                //     sequelize.fn(
                //         "to_char",
                //         sequelize.col("ngaysinh"),
                //         'DD-MM-YYYY',
                //     ),
                //     "ngaysinh"
                // ],
                "sdt",
                "ngaysinh",
            ],
              
            where: {
                ID_TK: accountID,
            }
        })
        res.render('edit_info', { styleLink: "/assets/css/ChinhSuaThongTin.css" });
    },
    getToken: async(req, res) => {
        const decode  = TokenManager.TokenDecode(req.body.accessToken, req.body.refreshToken);
        console.log(decode);
        accountID = decode.ID_TK;
        res.locals.accountInfo = await models.TaiKhoan.findAll({
            attributes: [
                "ID_TK",
                "hoten",
                "email",
                // [
                //     sequelize.fn(
                //         "to_char",
                //         sequelize.col("ngaysinh"),
                //         'DD-MM-YYYY',
                //     ),
                //     "ngaysinh"
                // ],
                "sdt",
                "ngaysinh",
            ],
              
            where: {
                ID_TK: accountID,
            }
        })
        res.render('edit_info_load', { styleLink: "/assets/css/ChinhSuaThongTin.css" });
    }
}

controller.editAccountInfo = async (req, res) => {
    let newInfo = {
        hoten: req.body.hoten,
        email: req.body.email,
        sdt: req.body.sdt,
        ngaysinh: req.body.ngaysinh,
    }
    // let info = await models.TaiKhoan.findByPk(1);
    // info.hoten = req.body.hoten;
    // info.save();

    await models.TaiKhoan.update(newInfo, {
        where: {
            ID_TK: accountID,
        }
    });

    res.redirect("/account_info")
}
module.exports = controller;