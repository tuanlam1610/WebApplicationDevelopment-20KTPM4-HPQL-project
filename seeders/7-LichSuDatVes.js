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
      [{ "ID_TK": 1, "ID_Ve": "H0000001", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000003", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000004", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000005", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000006", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000007", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000008", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000009", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000010", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000011", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": "H0000002", "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },];
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
