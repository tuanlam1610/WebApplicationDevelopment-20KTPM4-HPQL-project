const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('account_info', {styleLink: "/assets/css/ThongTinTaiKhoan.css"});
    }
}
module.exports = controller;