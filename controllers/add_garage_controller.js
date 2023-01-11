const controller = {
    show: async (req, res) => {
        res.render('add_garage', {styleLink: "/admin/assets/css/AddGarage.css", layout: "admin_layout2"});
    }
}
module.exports = controller;