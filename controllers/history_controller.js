const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('history', {styleLink: "/assets/css/LichSuDatVe.css"});
    }
    
}
module.exports = controller;