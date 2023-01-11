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
        "ID_NX": 1,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/1/Bus_img_1.png", "/assets/img/trip/1/Bus_img_2.png", "/assets/img/trip/1/Bus_img_3.png", "/assets/img/trip/1/Bus_img_4.png", "/assets/img/trip/1/Bus_img_5.png", "/assets/img/trip/1/Bus_img_6.png"],
        "diemDon": ["Bến xe miền tây"],
        "diemTra": ["Bến xe Sa Đéc", "Bến xe Cao Lãnh", "Bến xe Long Xuyên"],
        "tpDi": "TP. Hồ Chí Minh",
        "tpDen": "Long Xuyên",
        "gioKhoiHanh": "2023-01-14 20:00:00",
        "gioKetThuc": "2023-01-15 12:30:00",
        "tongThoiGian": "4:30",
        "loaiXe": "Giường nằm",
        "tongSoGhe": "36",
        "soGheTrong": "33",
        "giaVe": "170000",
        "tienIch": ['<i class="fa-solid fa-bottle-water"></i>Nước suối miễn phí', '<i class="fa-solid fa-mattress-pillow"></i>Trang bị mền gối', '<i class="fa-solid fa-wind"></i>Điều hòa nhiệt độ', '<i class="fa-solid fa-wifi"></i>Wifi tốc độ cao'],
      }, {
        "ID_NX": 1,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/2/Bus_img_1.png", "/assets/img/trip/2/Bus_img_2.png", "/assets/img/trip/2/Bus_img_3.png", "/assets/img/trip/2/Bus_img_4.png", "/assets/img/trip/700/Bus_img_5.png", "/assets/img/trip/2/Bus_img_6.png"],
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
        "ID_NX": 2,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/3/Bus_img_1.png", "/assets/img/trip/3/Bus_img_2.png", "/assets/img/trip/3/Bus_img_3.png", "/assets/img/trip/3/Bus_img_4.png", "/assets/img/trip/3/Bus_img_5.png", "/assets/img/trip/3/Bus_img_6.png",],
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
        "ID_NX": 2,
         "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/4/Bus_img_1.png", "/assets/img/trip/4/Bus_img_2.png", "/assets/img/trip/4/Bus_img_3.png", "/assets/img/trip/4/Bus_img_4.png", "/assets/img/trip/4/Bus_img_5.png", "/assets/img/trip/4/Bus_img_6.png",],
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
        "ID_NX": 3,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/5/Bus_img_1.png", "/assets/img/trip/5/Bus_img_2.png", "/assets/img/trip/5/Bus_img_3.png", "/assets/img/trip/5/Bus_img_4.png", "/assets/img/trip/5/Bus_img_5.png", "/assets/img/trip/5/Bus_img_6.png",],
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
        "ID_NX": 3,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/6/Bus_img_1.png", "/assets/img/trip/6/Bus_img_2.png", "/assets/img/trip/6/Bus_img_3.png", "/assets/img/trip/6/Bus_img_4.png", "/assets/img/trip/6/Bus_img_5.png", "/assets/img/trip/6/Bus_img_6.png",],
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
        "ID_NX": 3,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/7/Bus_img_1.png", "/assets/img/trip/7/Bus_img_2.png", "/assets/img/trip/7/Bus_img_3.png", "/assets/img/trip/7/Bus_img_4.png", "/assets/img/trip/7/Bus_img_5.png", "/assets/img/trip/7/Bus_img_6.png",],
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
        "ID_NX": 1,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/8/Bus_img_1.png", "/assets/img/trip/8/Bus_img_2.png", "/assets/img/trip/8/Bus_img_3.png", "/assets/img/trip/8/Bus_img_4.png", "/assets/img/trip/8/Bus_img_5.png", "/assets/img/trip/8/Bus_img_6.png",],
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
        "ID_NX": 1,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/9/Bus_img_1.png", "/assets/img/trip/9/Bus_img_2.png", "/assets/img/trip/9/Bus_img_3.png", "/assets/img/trip/9/Bus_img_4.png", "/assets/img/trip/9/Bus_img_5.png", "/assets/img/trip/9/Bus_img_6.png",],
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
        "ID_NX": 4,
        "moTaChinhSach": ["Yêu cầu khi lên xe:"," + Có mặt tại văn phòng/quầy vé/bến xe trước 30 phút để làm thủ tục lên xe","  + Xuất trình SMS/Email đặt vé trước khi lên xe"," + Không mang đồ ăn, thức ăn có mùi lên xe"," + Không hút thuốc, uống rượu, sử dụng chất kích thích trên xe"," +  Không mang các vật dễ cháy nổ lên xe "," + Không vứt rác trên xe"," + Không làm ồn, gây mất trật tự trên xe ","  + Không mang giày, dép trên xe."],
        "imagePath": ["/assets/img/trip/10/Bus_img_1.png", "/assets/img/trip/10/Bus_img_2.png", "/assets/img/trip/10/Bus_img_3.png", "/assets/img/trip/10/Bus_img_4.png", "/assets/img/trip/10/Bus_img_5.png", "/assets/img/trip/10/Bus_img_6.png",],
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
