const controller = {
    show: async (req, res) => {
        res.render('AddTrip', {styleLink: "/admin/assets/css/AddTrip.css"});
    }
}
module.exports = controller;