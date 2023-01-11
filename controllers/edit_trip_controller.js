const controller = {
    show: async (req, res) => {
        res.render('EditTrip', {styleLink: "/admin/assets/css/AddTrip.css"});
    }
}
module.exports = controller;