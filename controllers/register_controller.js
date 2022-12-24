const models = require('../models/index')
const { QueryTypes } = require('sequelize');

const controller = {
    show: async (req, res) => {
        res.render('RegisterPage', {title: "Register Page", styleLink: "../assets/css/RegisterPage.css", layout: "AuthPageLayout"});
    }
}

module.exports = controller;