const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('LoginPage', {title: "Login Page", styleLink: "../assets/css/LoginPage.css", layout: "AuthPageLayout"});
    }
}

module.exports = controller;