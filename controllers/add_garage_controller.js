const controller = {
    show: async (req, res) => {
        res.render('AddGarage', {styleLink: "/admin/assets/css/AddGarage.css"});
    }
}
module.exports = controller;