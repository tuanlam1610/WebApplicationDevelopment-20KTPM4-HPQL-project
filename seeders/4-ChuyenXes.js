'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let items =
      [{
        "IDChuyenXe": "08070650",
        "ID_NX": "1",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08070650/Bus_img_1.png", "/assets/img/08070650/Bus_img_2.png", "/assets/img/08070650/Bus_img_3.png", "/assets/img/08070650/Bus_img_4.png", "/assets/img/08070650/Bus_img_5.png", "/assets/img/08070650/Bus_img_6.png"],
        "diemDon": ["Bến xe miền tây"],
        "diemTra": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "tpDi": "TP. Hồ Chí Minh",
        "tpDen": "Long Xuyên",
        "gioKhoiHanh": "2023-01-14 20:00:00",
        "gioKetThuc": "2023-01-15 12:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "36",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08070700",
        "ID_NX": "1",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08070700/Bus_img_1.png", "/assets/img/08070700/Bus_img_2.png", "/assets/img/08070700/Bus_img_3.png", "/assets/img/08070700/Bus_img_4.png", "/assets/img/700/Bus_img_5.png", "/assets/img/08070700/Bus_img_6.png"],
        "diemDon": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "diemTra": ["Bến xe miền tây", "Bến xe Long An"],
        "tpDi": "Long Xuyên",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-14 23:00:00",
        "gioKetThuc": "2023-01-15 3:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "36",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08080650",
        "ID_NX": "2",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08080650/Bus_img_1.png", "/assets/img/08080650/Bus_img_2.png", "/assets/img/08080650/Bus_img_3.png", "/assets/img/08080650/Bus_img_4.png", "/assets/img/08080650/Bus_img_5.png", "/assets/img/08080650/Bus_img_6.png",],
        "diemDon": ["Bến xe miền tây", "Bến xe Huỳnh Đạt"],
        "diemTra": ["Bến xe Vĩnh Long", "Bến xe Tiền Giang"],
        "tpDi": "TP. Hồ Chí Minh",
        "tpDen": "Vĩnh Long",
        "gioKhoiHanh": "2023-01-17 11:00:00",
        "gioKetThuc": "2023-01-17 2:00:00",
        "tongThoiGian": "3:00",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "36",
        "giaVe": "150000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08080700",
        "ID_NX": "2",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08080700/Bus_img_1.png", "/assets/img/08080700/Bus_img_2.png", "/assets/img/08080700/Bus_img_3.png", "/assets/img/08080700/Bus_img_4.png", "/assets/img/08080700/Bus_img_5.png", "/assets/img/08080700/Bus_img_6.png",],
        "diemDon": ["Bến xe Vĩnh Long", "Bến xe Tiền Giang"],
        "diemTra": ["Bến xe miền tây", "Bến xe Huỳnh Đạt", "Bến xe Long An"],
        "tpDi": "Vĩnh Long",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-17 3:00:00",
        "gioKetThuc": "2023-01-17 6:00:00",
        "tongThoiGian": "3:00",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "36",
        "giaVe": "150000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08090650",
        "ID_NX": "3",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08090650/Bus_img_1.png", "/assets/img/08090650/Bus_img_2.png", "/assets/img/08090650/Bus_img_3.png", "/assets/img/08090650/Bus_img_4.png", "/assets/img/08090650/Bus_img_5.png", "/assets/img/08090650/Bus_img_6.png",],
        "diemDon": ["Bến xe miền tây, Bến xe Hùng Cường"],
        "diemTra": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên, Bến xe Châu Đốc"],
        "tpDi": "TP. Hồ Chí Minh",
        "tpDen": "Châu Đốc",
        "gioKhoiHanh": "2023-01-14 20:00:00",
        "gioKetThuc": "2023-01-15 1:30:00",
        "tongThoiGian": "5:30",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "36",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08090700",
        "ID_NX": "3",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08090700/Bus_img_1.png", "/assets/img/08090700/Bus_img_2.png", "/assets/img/08090700/Bus_img_3.png", "/assets/img/08090700/Bus_img_4.png", "/assets/img/08090700/Bus_img_5.png", "/assets/img/08090700/Bus_img_6.png",],
        "diemDon": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên, Bến xe Châu Đốc"],
        "diemTra": ["Bến xe miền tây", "Bến xe Hùng Cường"],
        "tpDi": "Châu Đốc",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-15 1:00:00",
        "gioKetThuc": "2023-01-15 6:30:00",
        "tongThoiGian": "5:30",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "45",
        "soGheTrong": "45",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08091700",
        "ID_NX": "3",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08091700/Bus_img_1.png", "/assets/img/08091700/Bus_img_2.png", "/assets/img/08091700/Bus_img_3.png", "/assets/img/08091700/Bus_img_4.png", "/assets/img/08091700/Bus_img_5.png", "/assets/img/08091700/Bus_img_6.png",],
        "diemDon": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên, Bến xe Châu Đốc"],
        "diemTra": ["Bến xe miền tây", "Bến xe Hùng Cường"],
        "tpDi": "Châu Đốc",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-15 1:00:00",
        "gioKetThuc": "2023-01-15 6:30:00",
        "tongThoiGian": "5:30",
        "loaiXe": "Ghế ngồi",
        "tongSoGhe": "45",
        "soGheTrong": "45",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08071650",
        "ID_NX": "1",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08071650/Bus_img_1.png", "/assets/img/08071650/Bus_img_2.png", "/assets/img/08071650/Bus_img_3.png", "/assets/img/08071650/Bus_img_4.png", "/assets/img/08071650/Bus_img_5.png", "/assets/img/08071650/Bus_img_6.png",],
        "diemDon": ["Bến xe miền tây"],
        "diemTra": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "tpDi": "TP. Hồ Chí Minh",
        "tpDen": "Long Xuyên",
        "gioKhoiHanh": "2023-01-15 13:00:00",
        "gioKetThuc": "2023-01-15 17:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Ghế ngồi",
        "tongSoGhe": "45",
        "soGheTrong": "45",
        "giaVe": "160000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08071700",
        "ID_NX": "1",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08071700/Bus_img_1.png", "/assets/img/08071700/Bus_img_2.png", "/assets/img/08071700/Bus_img_3.png", "/assets/img/08071700/Bus_img_4.png", "/assets/img/08071700/Bus_img_5.png", "/assets/img/08071700/Bus_img_6.png",],
        "diemDon": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "diemTra": ["Bến xe miền tây", "Bến xe Long An"],
        "tpDi": "Long Xuyên",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-15 13:00:00",
        "gioKetThuc": "2023-01-15 17:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Ghế ngồi",
        "tongSoGhe": "45",
        "soGheTrong": "45",
        "giaVe": "160000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "IDChuyenXe": "08062700",
        "ID_NX": "4",
        "moTaChinhSach": ["Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est."],
        "imagePath": ["/assets/img/08062700/Bus_img_1.png", "/assets/img/08062700/Bus_img_2.png", "/assets/img/08062700/Bus_img_3.png", "/assets/img/08062700/Bus_img_4.png", "/assets/img/08062700/Bus_img_5.png", "/assets/img/08062700/Bus_img_6.png",],
        "diemDon": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "diemTra": ["Bến xe miền tây", "Bến xe Long An"],
        "tpDi": "Long Xuyên",
        "tpDen": "TP. Hồ Chí Minh",
        "gioKhoiHanh": "2023-01-15 13:00:00",
        "gioKetThuc": "2023-01-15 17:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Giường đôi",
        "tongSoGhe": "24",
        "soGheTrong": "24",
        "giaVe": "300000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
     }
      ];
    //{
    //   "IDChuyenXe": "24356105",
    //   "ID_NX": "1",
    //   "moTaChinhSach": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    //   "imagePath": "/assets/images/24356105/",
    //   "noiBatDau": "Eci",
    //   "noiKetThuc": "Rybnaya Sloboda",
    //   "gioKhoiHanh": "03/19/2022",
    //   "gioKetThuc": "04/30/2022",
    //   "tongThoiGian": "12:26 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "10",
    //   "soGheTrong": "89",
    //   "giaVe": "647033"
    // }, {
    //   "IDChuyenXe": "03446327",
    //   "ID_NX": "2",
    //   "moTaChinhSach": "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    //   "imagePath": "/assets/images/03446327/",
    //   "noiBatDau": "Wiskitki",
    //   "noiKetThuc": "Dasongshu",
    //   "gioKhoiHanh": "10/07/2022",
    //   "gioKetThuc": "04/04/2022",
    //   "tongThoiGian": "1:52 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "00",
    //   "soGheTrong": "05",
    //   "giaVe": "163840"
    // }, {
    //   "IDChuyenXe": "03441046",
    //   "ID_NX": "2",
    //   "moTaChinhSach": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.",
    //   "imagePath": "/assets/images/03441046/",
    //   "noiBatDau": "Soca",
    //   "noiKetThuc": "Courbevoie",
    //   "gioKhoiHanh": "01/22/2022",
    //   "gioKetThuc": "01/12/2022",
    //   "tongThoiGian": "7:31 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "86",
    //   "soGheTrong": "58",
    //   "giaVe": "311344"
    // }, {
    //   "IDChuyenXe": "80653602",
    //   "ID_NX": "3",
    //   "moTaChinhSach": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
    //   "imagePath": "/assets/images/80653602/",
    //   "noiBatDau": "Sosnovaya Polyana",
    //   "noiKetThuc": "Tubungan",
    //   "gioKhoiHanh": "07/18/2022",
    //   "gioKetThuc": "03/01/2022",
    //   "tongThoiGian": "10:31 PM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "03",
    //   "soGheTrong": "20",
    //   "giaVe": "175468"
    // }, {
    //   "IDChuyenXe": "65121825",
    //   "ID_NX": "3",
    //   "moTaChinhSach": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    //   "imagePath": "/assets/images/65121825/",
    //   "noiBatDau": "Pudong",
    //   "noiKetThuc": "El Hermel",
    //   "gioKhoiHanh": "03/03/2022",
    //   "gioKetThuc": "10/10/2022",
    //   "tongThoiGian": "9:05 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "80",
    //   "soGheTrong": "15",
    //   "giaVe": "182423"
    // }, {
    //   "IDChuyenXe": "54682631",
    //   "ID_NX": "4",
    //   "moTaChinhSach": "In congue. Etiam justo. Etiam pretium iaculis justo.",
    //   "imagePath": "/assets/images/54682631/",
    //   "noiBatDau": "Mundybash",
    //   "noiKetThuc": "Chenxiang",
    //   "gioKhoiHanh": "03/03/2022",
    //   "gioKetThuc": "01/01/2022",
    //   "tongThoiGian": "12:38 PM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "58",
    //   "soGheTrong": "61",
    //   "giaVe": "714574"
    // }, {
    //   "IDChuyenXe": "16930988",
    //   "ID_NX": "4",
    //   "moTaChinhSach": "Duis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
    //   "imagePath": "/assets/images/16930988/",
    //   "noiBatDau": "Orikhiv",
    //   "noiKetThuc": "Si Somdet",
    //   "gioKhoiHanh": "04/05/2022",
    //   "gioKetThuc": "03/11/2022",
    //   "tongThoiGian": "12:57 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "71",
    //   "soGheTrong": "27",
    //   "giaVe": "965451"
    // }, {
    //   "IDChuyenXe": "35697028",
    //   "ID_NX": "5",
    //   "moTaChinhSach": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    //   "imagePath": "/assets/images/35697028/",
    //   "noiBatDau": "Saint-Pierre",
    //   "noiKetThuc": "Orizari",
    //   "gioKhoiHanh": "06/22/2022",
    //   "gioKetThuc": "07/22/2022",
    //   "tongThoiGian": "5:30 PM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "18",
    //   "soGheTrong": "16",
    //   "giaVe": "818425"
    // }, {
    //   "IDChuyenXe": "66686448",
    //   "ID_NX": "5",
    //   "moTaChinhSach": "Aenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.",
    //   "imagePath": "/assets/images/66686448/",
    //   "noiBatDau": "Guolemude",
    //   "noiKetThuc": "Komsomol’skiy",
    //   "gioKhoiHanh": "05/07/2022",
    //   "gioKetThuc": "08/02/2022",
    //   "tongThoiGian": "4:56 AM",
    //   "loaiXe": "Giường",
    //   "tongSoGhe": "55",
    //   "soGheTrong": "82",
    //   "giaVe": "712579"
    // }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('ChuyenXes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('ChuyenXes', null, {})
  }
};