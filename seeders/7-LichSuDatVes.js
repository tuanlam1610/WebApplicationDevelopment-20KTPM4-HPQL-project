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
      [{ "ID_TK": 1, "ID_Ve": 1, "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": 2, "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" },
      { "ID_TK": 1, "ID_Ve": 3, "thoigiandat": "2022-11-03", "trangthaive": "Đã đặt" }];
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
