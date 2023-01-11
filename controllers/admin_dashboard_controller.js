const controller = {
    show: async (req, res) => {
        res.render('AdminDashboard', {styleLink: "/admin/assets/css/Admin.css", layout: "admin_layout"});
    }
}
module.exports = controller;