const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('edit_info', {styleLink: "/assets/css/ChinhSuaThongTin.css"});
    }
    
}
module.exports = controller;