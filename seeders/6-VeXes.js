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
        "IDVe": "64857833",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A01"
      }, {
        "IDVe": "22397613",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A02"
      }, {
        "IDVe": "04504427",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A03"
      }, {
        "IDVe": "91526498",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A04"
      }, {
        "IDVe": "17176508",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A05"
      }, {
        "IDVe": "34167050",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A06"
      }, {
        "IDVe": "18955976",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A07"
      }, {
        "IDVe": "63928870",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A08"
      }, {
        "IDVe": "66922310",
        "IDChuyenXe": "02652053",
        "viTriGhe": "A09"
      }, {
        "IDVe": "89817362",
        "IDChuyenXe": "02652053",
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
