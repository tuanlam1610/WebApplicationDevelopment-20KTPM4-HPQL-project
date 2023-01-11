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
        res.render('account_info', {styleLink: "/assets/css/ThongTinTaiKhoan.css"});
    },
    getToken: async(req, res) => {
        const decode  = TokenManager.TokenDecode(req.body.accessToken, req.body.refreshToken);
        console.log(decode);
        accountID = decode.ID_TK;
        // res.send(JSON.stringify({user: decode}))
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
        res.render('account_info_load', {styleLink: "/assets/css/ThongTinTaiKhoan.css"});
    }
}
module.exports = controller;