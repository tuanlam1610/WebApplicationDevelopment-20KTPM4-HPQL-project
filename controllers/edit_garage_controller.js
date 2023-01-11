const controller = {
    show: async (req, res) => {
        res.render('EditGarage', {styleLink: "/admin/assets/css/AddGarage.css"});
    }
}
module.exports = controller;