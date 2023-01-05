const models = require('../models')
const { Op, DATEONLY } = require("sequelize");
const sequelize = require('sequelize')

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
                ID_TK: 1,
            }
        })

        res.render('account_info', {styleLink: "/assets/css/ThongTinTaiKhoan.css"});
    }
    
}
module.exports = controller;