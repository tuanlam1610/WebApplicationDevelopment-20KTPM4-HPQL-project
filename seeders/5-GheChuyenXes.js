'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let items =
    [{
      "IDChuyenXe": "02652053",
      "viTriGhe": "11",
      "trangThaiGhe": true
    }, {
      "IDChuyenXe": "09876702",
      "viTriGhe": "6",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "67098819",
      "viTriGhe": "17",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "54567944",
      "viTriGhe": "8",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "89914776",
      "viTriGhe": "11",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "19927537",
      "viTriGhe": "24",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "57831552",
      "viTriGhe": "26",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "37005973",
      "viTriGhe": "2",
      "trangThaiGhe": false
    }, {
      "IDChuyenXe": "19539668",
      "viTriGhe": "2",
      "trangThaiGhe": true
    }, {
      "IDChuyenXe": "48261405",
      "viTriGhe": "30",
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
