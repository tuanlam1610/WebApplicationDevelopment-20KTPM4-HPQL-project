const models = require('../models/index')

function getSum(total, item){
    return total + item.soSao
}

const controller = {
    show: async (req, res) => {
        res.render('garage_info', { styleLink: "/assets/css/garage_info.css" });
    },
    showDetails: async (req, res) => {
        const loaiGhe = await models.ChuyenXe.findAll({
            attributes: ['loaiXe'],
            group: 'loaiXe'
        })
        let count = 0;
        const garageFound = await models.NhaXe.findOne({
            where: {
                ID_NX: req.params.id
            }
        });
        var listCMT = []
        while (true) {
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
                    order: [['ngayDanhGia', 'DESC']],
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
        res.locals.garage = { garageinfo: garageFound, num_of_cmts: count_CMT, cmts: listCMT, loaiGhe: loaiGhe };
        res.locals.styleLink = "/assets/css/garage_info.css";
        res.render('garage_info');
    },
    addComment: async (req, res) => {
        let review = {
            ID_NX: req.body.ID_NX,
            ID_TK: req.body.ID_TK,
            soSao: req.body.star || 3,
            loaiGhe: req.body.loaiGhe,
            noiDung: req.body.noiDung,
            ngayDanhGia: req.body.ngayDanhGia,
        }
        let msg = "";
        try {
            const run = await models.DanhGia.create(review);
            let garages = await models.NhaXe.findAll({
                where:{
                    ID_NX: review.ID_NX
                },
                include: [{
                    model: models.DanhGia
                }]
            });
            garages.forEach(async (item) =>  {
                let stars = 0;
                if (item.DanhGia.length > 0) {
                    stars = item.DanhGia.reduce(getSum, 0) / item.DanhGia.length;
                }
                console.log(stars)
                item.sosaoTB = stars;
                await item.update({
                    sosaoTB: stars.toFixed(1)
                }, {
                    where: { ID_NX: item.ID_NX }
                })
            })
            msg = {
                result: "Th??nh c??ng",
                sign: "1",
            }
        } catch (err) {
            // const errObj = {};
            // err.errors.map(er => {
            //     errObj[er.path] = er.message;
            // })
            msg = {
                result: "B???n ???? ????nh gi?? nh?? xe n??y tr?????c ????!",
                sign: "0",
            }
        }
        res.setHeader('content-type', 'application/json');
        res.status(200).send(JSON.stringify(msg));
    }
}
module.exports = controller;