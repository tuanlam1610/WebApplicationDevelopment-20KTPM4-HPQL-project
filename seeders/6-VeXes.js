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
        "IDVe": "H0000001",
        "IDChuyenXe": "1",
        "viTriGhe": "A01"
      }, {
        "IDVe": "H0000002",
        "IDChuyenXe": "1",
        "viTriGhe": "A02"
      }, {
        "IDVe": "P0000001",
        "IDChuyenXe": "1",
        "viTriGhe": "A03"
      }, {
        "IDVe": "P0000002",
        "IDChuyenXe": "1",
        "viTriGhe": "A04"
      }, {
        "IDVe": "Q0000001",
        "IDChuyenXe": "1",
        "viTriGhe": "A05"
      }, {
        "IDVe": "Q0000002",
        "IDChuyenXe": "1",
        "viTriGhe": "A06"
      }, {
        "IDVe": "L0000001",
        "IDChuyenXe": "1",
        "viTriGhe": "A07"
      }, {
        "IDVe": "L0000002",
        "IDChuyenXe": "1",
        "viTriGhe": "A08"
      }, {
        "IDVe": "L0000003",
        "IDChuyenXe": "1",
        "viTriGhe": "A09"
      }, {
        "IDVe": "L0000004",
        "IDChuyenXe": "1",
        "viTriGhe": "A10"
      }];
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('VeXes', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('VeXes', null, {});
  }
};
