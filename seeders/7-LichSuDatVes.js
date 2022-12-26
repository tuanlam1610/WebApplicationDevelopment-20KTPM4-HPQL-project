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
      [{ "ID_TK": "1", "ID_Ve": "H0000001", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": "2", "ID_Ve": "H0000002", "thoigiandat": "2022-08-26", "trangthaive": "Đã thanh toán" },
      { "ID_TK": "3", "ID_Ve": "P0000001", "thoigiandat": "2022-11-25", "trangthaive": "Đã hủy" },
      { "ID_TK": "4", "ID_Ve": "P0000002", "thoigiandat": "2022-11-12", "trangthaive": "Đã đặt" },
      { "ID_TK": "5", "ID_Ve": "Q0000001", "thoigiandat": "2022-06-14", "trangthaive": "Đã đặt" },
      { "ID_TK": "6", "ID_Ve": "Q0000002", "thoigiandat": "2022-07-10", "trangthaive": "Đã hủy" },
      { "ID_TK": "7", "ID_Ve": "L0000001", "thoigiandat": "2021-12-28", "trangthaive": "Đã thanh toán" },
      { "ID_TK": "8", "ID_Ve": "L0000002", "thoigiandat": "2022-08-13", "trangthaive": "Đã thanh toán" },
      { "ID_TK": "9", "ID_Ve": "L0000003", "thoigiandat": "2022-09-30", "trangthaive": "Đã thanh toán" },
      { "ID_TK": "10", "ID_Ve": "L0000004", "thoigiandat": "2022-07-25", "trangthaive": "Đã hủy" }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('LichSuDatVes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('LichSuDatVes', null, {})
  }
};
