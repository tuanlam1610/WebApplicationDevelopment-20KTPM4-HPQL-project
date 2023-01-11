const controller = {
    show: async (req, res) => {
        res.render('admin_trips', {styleLink: "/admin/assets/css/Admin.css", layout: "admin_layout1"});
    }
}
module.exports = controller;