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
        //"ID_Ve": "H0000001",
        "IDChuyenXe": 1,
        "viTriGhe": "A01"
      }, {
        //"ID_Ve": "H0000002",
        "IDChuyenXe": 1,
        "viTriGhe": "A02"
      }, {
        //"ID_Ve": "H0000003",
        "IDChuyenXe": 1,
        "viTriGhe": "A03"
      }, {
        //"ID_Ve": "H0000004",
        "IDChuyenXe": 1,
        "viTriGhe": "A04"
      }, {
        //"ID_Ve": "H0000005",
        "IDChuyenXe": 1,
        "viTriGhe": "A05"
      }, {
        //"ID_Ve": "H0000006",
        "IDChuyenXe": 1,
        "viTriGhe": "A06"
      }, {
       //"ID_Ve": "H0000007",
        "IDChuyenXe": 1,
        "viTriGhe": "A07"
      }, {
        //"ID_Ve": "H0000008",
        "IDChuyenXe": 1,
        "viTriGhe": "A08"
      }, {
        //"ID_Ve": "H0000009",
        "IDChuyenXe": 1,
        "viTriGhe": "A09"
      }, {
        //"ID_Ve": "H0000010",
        "IDChuyenXe": 1,
        "viTriGhe": "A10"
      }, {
        //"ID_Ve": "H0000011",
        "IDChuyenXe": 1,
        "viTriGhe": "A11"
      }, {
        //"ID_Ve": "H0000012",
        "IDChuyenXe": 1,
        "viTriGhe": "A12"
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
