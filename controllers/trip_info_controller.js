const controller = {
    show: async (req, res) =>{
        res.render('trip_info', {styleLink: "/assets/css/trip_info.css"});
    }
}
module.exports = controller;