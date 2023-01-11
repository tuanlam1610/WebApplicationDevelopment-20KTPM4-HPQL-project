const controller = {
    show: async (req, res) => {
        res.render('AdminGarages', {styleLink: "/admin/assets/css/Admin.css", layout: "admin_layout"});
    }
}
module.exports = controller;