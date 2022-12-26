const models = require('../models/index')

const controller = {
    show: async (req, res) => {
        res.render('garage_info', {styleLink: "/assets/css/garage_info.css"});
    },
    showDetails: async (req, res) => {
        let count = 0;
        const garageFound = await models.NhaXe.findOne({
            where: {
                ID_NX: req.params.id
            }
        });
        console.log(garageFound.ID_NX);
        var listCMT = []
        while(true){
            const cmtFound = await models.DanhGia.findAll(
                {
                    where: {
                        ID_NX: garageFound.ID_NX
                    },
                    include: [{
                        model: models.TaiKhoan,
                        attributes: ['hoten'],
                        require: true
                    }],
                    order: [['ngayDanhGia','DESC']],
                    limit: 2,
                    offset: count
                },
            )
            count += 2
            if (cmtFound.length == 0) break
            else listCMT.push(cmtFound);
        }
        const count_CMT = await models.DanhGia.count({
            where: {
                ID_NX: garageFound.ID_NX
            }
        })
        //res.locals.cmts = cmtFound;
        res.locals.garage = { garageinfo: garageFound, num_of_cmts: count_CMT, cmts: listCMT};
        res.locals.styleLink = "/assets/css/garage_info.css";
        res.render('garage_info');
    }
}
module.exports = controller;