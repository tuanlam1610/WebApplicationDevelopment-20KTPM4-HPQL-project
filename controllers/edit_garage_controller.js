const controller = {
    show: async (req, res) => {
        res.render('edit_garage', {styleLink: "/admin/assets/css/AddGarage.css", layout: "admin_layout2"});
    }
}
module.exports = controller;