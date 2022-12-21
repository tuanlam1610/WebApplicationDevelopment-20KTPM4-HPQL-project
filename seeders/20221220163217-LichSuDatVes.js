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
      [{ "ID_KH": "98024659", "ID_Ve": "31503112", "thoigiandat": "2022-11-03", "trangthaive": 2 },
      { "ID_KH": "51262348", "ID_Ve": "33197903", "thoigiandat": "2022-08-26", "trangthaive": 3 },
      { "ID_KH": "29895257", "ID_Ve": "25646650", "thoigiandat": "2022-11-25", "trangthaive": 1 },
      { "ID_KH": "81190629", "ID_Ve": "98483547", "thoigiandat": "2022-11-12", "trangthaive": 2 },
      { "ID_KH": "14272059", "ID_Ve": "02348145", "thoigiandat": "2022-06-14", "trangthaive": 2 },
      { "ID_KH": "40754070", "ID_Ve": "76659877", "thoigiandat": "2022-07-10", "trangthaive": 3 },
      { "ID_KH": "75787472", "ID_Ve": "18014147", "thoigiandat": "2021-12-28", "trangthaive": 1 },
      { "ID_KH": "06718699", "ID_Ve": "95476698", "thoigiandat": "2022-08-13", "trangthaive": 1 },
      { "ID_KH": "99936313", "ID_Ve": "11112472", "thoigiandat": "2022-09-30", "trangthaive": 1 },
      { "ID_KH": "86403772", "ID_Ve": "29315746", "thoigiandat": "2022-07-25", "trangthaive": 2 }];
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
