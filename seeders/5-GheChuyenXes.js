'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let items =
    [{
      "IDChuyenXe": 1,
      "viTriGhe": "A10",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A09",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A08",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A07",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A06",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A05",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A04",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A03",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A02",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": 1,
      "viTriGhe": "A01",
      "trangThaiGhe": false
    }];
    
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('GheChuyenXes', items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('GheChuyenXes', null, {});
  }
};
