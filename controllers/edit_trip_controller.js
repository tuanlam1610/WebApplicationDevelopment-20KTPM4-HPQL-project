const controller = {
    show: async (req, res) => {
        res.render('edit_trip', {styleLink: "/admin/assets/css/AddTrip.css", layout: "admin_layout2"});
    }
}
module.exports = controller;