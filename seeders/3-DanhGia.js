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
      "ID_TK": 1,
      "ngayDanhGia": "2022/09/14",
      "loaiGhe": "Ghế ngồi",
      "soSao": 3,
      "noiDung": "Xe phục vụ tốt, nhưng trên xe có mùi lạ"
    }, {
      "ID_NX": 1,
      "ID_TK": 2,
      "ngayDanhGia": "2022/03/17",
      "loaiGhe": "Ghế ngồi",
      "soSao": 3,
      "noiDung": "Xe rất êm, dễ ngủ, nhưng hành khách rất um xùm nguyên chuyến xe"
    }, {
      "ID_NX": 2,
      "ID_TK": 3,
      "ngayDanhGia": "2022/12/11",
      "loaiGhe": "Giường nằm",
      "soSao": 1,
      "noiDung": "Xe phục vụ tốt, nhưng khi hủy vé, nhà xe không đồng ý hủy vé trong thời gian hợp lí"
    }, {
      "ID_NX": 2,
      "ID_TK": 4,
      "ngayDanhGia": "2022/03/28",
      "loaiGhe": "Giường nằm",
      "soSao": 5,
      "noiDung": "Nhà xe hỗ trợ tốt, cung cấp thông tin đầy đủ trong việc đặt vé, nhân viên xe phục vụ tận tình ."
    }, {
      "ID_NX": 3,
      "ID_TK": 5,
      "ngayDanhGia": "2022/09/29",
      "loaiGhe": "Giường nằm",
      "soSao": 2,
      "noiDung": "Nhân viên rất thô lỗ, xe chạy rất chậm."
    }, {
      "ID_NX": 1,
      "ID_TK": 3,
      "ngayDanhGia": "2022/03/28",
      "loaiGhe": "Giường nằm",
      "soSao": 3,
      "noiDung": "Chuyến xe phục vụ tốt, nhưng xe quá ồn ào, khó ngủ."
    }, {
      "ID_NX": 1,
      "ID_TK": 4,
      "ngayDanhGia": "2022/12/28",
      "loaiGhe": "Giường nằm",
      "soSao": 4,
      "noiDung": "Nhà xe hỗ trợ tốt, nhân viên phục vụ tốt ."
    }, {
      "ID_NX": 1,
      "ID_TK": 5,
      "ngayDanhGia": "2023/01/01",
      "loaiGhe": "Giường nằm",
      "soSao": 5,
      "noiDung": "Nhà xe hỗ trợ tốt, cung cấp thông tin đầy đủ trong việc đặt vé, nhân viên xe phục vụ tận tình ."
    }, {
      "ID_NX": 1,
      "ID_TK": 6,
      "ngayDanhGia": "2022/12/20",
      "loaiGhe": "Giường nằm",
      "soSao": 3,
      "noiDung": "Nhà xe hỗ trợ tốt, tuy nhiên xe chạy rất chậm."
    }, {
      "ID_NX": 1,
      "ID_TK": 7,
      "ngayDanhGia": "2022/09/02",
      "loaiGhe": "Giường nằm",
      "soSao": 4,
      "noiDung": "Đặt ghế rất nhanh."
    }, {
      "ID_NX": 1,
      "ID_TK": 8,
      "ngayDanhGia": "2022/12/31",
      "loaiGhe": "Giường nằm",
      "soSao": 1,
      "noiDung": "Bị nhân viên chửi."
    }, {
      "ID_NX": 1,
      "ID_TK": 9,
      "ngayDanhGia": "2022/09/22",
      "loaiGhe": "Giường nằm",
      "soSao": 5,
      "noiDung": "Xe chạy êm"
    }, {
      "ID_NX": 1,
      "ID_TK": 10,
      "ngayDanhGia": "2022/09/22",
      "loaiGhe": "Giường nằm",
      "soSao": 3,
      "noiDung": "Xe chạy êm, phục vụ nước đầy đủ, nhưng máy lạnh quá lạnh không tắt được"
    }]
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('DanhGia', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('DanhGia', null, {})
  }
};