const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('RegisterPage', { title: "Register Page", styleLink: "../assets/css/RegisterPage.css", layout: "AuthPageLayout" });
    },
    register: async (req, res) => {
        const newAccount = {
            email: req.body.email,
            hoten: req.body.name,
            password: req.body.pass,
            repass: req.body.repass,
            sdt: req.body.phonenum,
            isAdmin: false
        }

        const emailExisted = await models.TaiKhoan.findOne({
            where: {
                email: newAccount.email,
            }
        })
        var msg = "";
        if (emailExisted){
            msg = {
                result: "Email đã tồn tại.",
                sign: "0",
            }
        }
        else{
            if (newAccount.sdt.length > 10){
                msg = {
                    result: "Số điện thoại không quá 10 số.",
                    sign: "0",
                }
            }
            else{
                if (newAccount.password.length < 6 || newAccount.password.length > 20){
                    msg = {
                        result: "Mật khẩu phải dài từ 6-20 ký tự.",
                        sign: "0",
                    }
                }
                else{
                    if (newAccount.password === newAccount.repass){
                        await models.TaiKhoan.create(newAccount);
                        msg = {
                            result: "Tạo tài khoản thành công.",
                            sign: "1",
                        }
                    }
                    else{
                        msg = {
                            result: "Mật khẩu không trùng khớp",
                            sign: "0",
                        }
                    }
                }
            }
        }
        res.setHeader('content-type', 'application/json'); 
        res.status(200).send(JSON.stringify(msg));
    }

}

module.exports = controller;