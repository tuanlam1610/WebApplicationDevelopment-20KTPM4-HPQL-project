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
        "IDChuyenXe": "53016947",
        "viTriGhe": "3"
      }, {
        "IDVe": "22397613",
        "IDChuyenXe": "67551793",
        "viTriGhe": "6"
      }, {
        "IDVe": "04504427",
        "IDChuyenXe": "04738555",
        "viTriGhe": "25"
      }, {
        "IDVe": "91526498",
        "IDChuyenXe": "04045459",
        "viTriGhe": "12"
      }, {
        "IDVe": "17176508",
        "IDChuyenXe": "71977105",
        "viTriGhe": "28"
      }, {
        "IDVe": "34167050",
        "IDChuyenXe": "21804817",
        "viTriGhe": "2"
      }, {
        "IDVe": "18955976",
        "IDChuyenXe": "54525526",
        "viTriGhe": "30"
      }, {
        "IDVe": "63928870",
        "IDChuyenXe": "74036437",
        "viTriGhe": "22"
      }, {
        "IDVe": "66922310",
        "IDChuyenXe": "08408549",
        "viTriGhe": "22"
      }, {
        "IDVe": "89817362",
        "IDChuyenXe": "18714595",
        "viTriGhe": "13"
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
