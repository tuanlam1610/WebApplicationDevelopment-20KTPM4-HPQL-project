const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('change_password', {styleLink: "/assets/css/ThayDoiMatKhau.css"});
    }
    
}
module.exports = controller;