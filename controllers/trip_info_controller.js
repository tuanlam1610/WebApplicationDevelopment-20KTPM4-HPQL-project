const models = require('../models/index');
const { showDetails } = require('./garage_info_controller');


const controller = {
    show: async (req, res) =>{
        res.render('trip_info', {styleLink: "/assets/css/trip_info.css"});
    },
    showDetails: async (req, res) => {
    }
}
module.exports = controller;