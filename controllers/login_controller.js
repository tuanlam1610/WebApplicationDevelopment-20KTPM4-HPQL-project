const models = require('../models/index')
const { QueryTypes } = require('sequelize');
const TokenManager = require('../middleware/token');
const controller = {
    loginCheck: async (req, res) => {
        console.log(req.body.email);
        console.log(req.body.pass);
        const email = req.body.email;
        const pass = req.body.pass;
        var msg = "";
        var query = {
            where:{
                email:email
            }
        }
        const isExist = await models.TaiKhoan.findOne(query);
        if(isExist != null) {
            // Check Password
            query = {
                where: {
                    email:email,
                    password: pass
                }
            }
            const account = await models.TaiKhoan.findOne(query);
            if (account != null) {
                msg = {
                    result: "Login Successfully As User " + account.hoten,
                    sign: "1",
                }
                const Token = TokenManager.generateToken(account.dataValues);
                // localStorage.setItem("accessToken", Token.accessToken);
                // localStorage.setItem("refreshToken", Token.refreshToken);
                res.status(200).send(JSON.stringify({ 
                    msg: msg, 
                    token: Token, 
                    account: account 
                }));
                return;
            }
            else {
                msg = {
                    result: "Wrong Password",
                    sign: "0",
                }
            }
        }
        else {
            msg = {
                result: "Account not exist",
                sign: "0",
            }
        }
        // res.setHeader('content-type', 'application/json'); 
        res.status(200).send(JSON.stringify({msg: msg}));
    },
    show: async (req, res) => {
        res.render('LoginPage', {title: "Login Page", styleLink: "../assets/css/LoginPage.css", layout: "AuthPageLayout"});
    }
}

module.exports = controller;