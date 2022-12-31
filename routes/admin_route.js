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
            listProperties: ['IDChuyenXe', 'ID_NX', 'tpDi', 'tpDen', 'gioKhoiHanh', 'loaiXe', 'tongoSoGhe', 'soGheTrong', 'giaVe'],
            properties: {
                ID_NX: {
                    position: 1,
                    isRequired: true
                },
                tpDi: {
                    position: 2,
                    isRequired: true
                },
                tpDen: {
                    position: 3,
                    isRequired: true
                },
                gioKhoiHanh: {
                    position: 4,
                    isRequired: true
                },
                gioKetThuc: {
                    position: 5,
                    isRequired: true
                },
                loaiXe: {
                    position: 6,
                    availableValues: [{value: "Ghế ngồi", label: "Ghế ngồi"},
                                      {value: "Giường nằm", label: "Giường nằm"},
                                      {value: "Giường đôi", label: "Giường đôi"},],
                    isRequired: true
                },
                tongSoGhe: {
                    position: 7,
                    isRequired: true
                },
                soGheTrong: {
                    position: 8,
                    isRequired: true
                },
                giaVe: {
                    position: 9,
                    isRequired: true
                },
                tongThoiGian: {
                    isVisible: false
                }
            }
        }
    }, {
        resource: NhaXe,
        options: {
            listProperties: ['ID_NX', 'tennhaxe', 'sdt', 'diachi', 'email', 'website', 'sosaoTB'],
            properties: {
                tennhaxe: {
                    isTitle: true,
                    position: 1,
                    isRequired: true
                },
                email: {
                    isTitle: false,
                    position: 2,
                    isRequired: true
                },
                sdt:{
                    position: 3,
                    isRequired: true
                },
                diachi:{
                    position: 4,
                    isRequired: true
                },
                website:{
                    position: 5
                },
                sosaoTB:{
                    position: 6,
                    isEditable: false
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