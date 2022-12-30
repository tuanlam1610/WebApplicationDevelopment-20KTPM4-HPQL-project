// const express = require('express');
// const route = express.Router();
// const garageController = require('../controllers/admin_controller_garage');
// const tripController = require('../controllers/admin_controller_trip');

// route.get('/garage/', garageController.show);
// route.get('/trip/', tripController.show);

// module.exports = route;

const AdminJS = require('adminjs')
const { ChuyenXe, NhaXe, VeXe, TaiKhoan } = require('../models');
const adminjs = new AdminJS({
    rootPath: '/admin',
    loginPath: '/admin/login',
    resources: [{
        resource: ChuyenXe,
        options: {
            listProperties: ['IDChuyenXe','ID_NX','tpDi','tpDen','gioKhoiHanh','loaiXe','tongoSoGhe','soGheTrong','giaVe']
        }
    }, {
        resource: NhaXe,
        options: {
            listProperties:['ID_NX','tennhaxe','sdt','diachi','email','website','sosaoTB'],
            properties: {
                tennhaxe: {
                    isTitle: true
                },

                email: {
                    isTitle: false
                }
            }
        }
    }
    ],
    branding: {
        companyName: 'HPQL',
        softwareBrothers: false,
    }
});
module.exports = adminjs;