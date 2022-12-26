'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
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
    [{ "ID_TK": "1", "email": "tczaple0@people.com.cn", "sdt": "1484297558", "hoten": "Torrey Czaple", "ngaysinh": "2022-01-01", "password": "S5bCnOvhQ", "isAdmin": "false"},
    { "ID_TK": "2", "email": "ifauguel1@blogs.com", "sdt": "4316013419", "hoten": "Illa Fauguel", "ngaysinh": "2022-01-01", "password": "yTb3LR2ILNB", "isAdmin": "false"},
    { "ID_TK": "3", "email": "bscarlan2@narod.ru", "sdt": "4013075497", "hoten": "Bone Scarlan", "ngaysinh": "2022-01-01", "password": "UKH2Ag", "isAdmin": "false"},
    { "ID_TK": "4", "email": "fmarrian3@devhub.com", "sdt": "5958406601", "hoten": "Franni Marrian", "ngaysinh": "2022-01-01", "password": "mk09rE7V", "isAdmin": "false"},
    { "ID_TK": "5", "email": "kmathan4@rakuten.co.jp", "sdt": "3035927832", "hoten": "Krista Mathan", "ngaysinh": "2022-01-01", "password": "TlSToWWMI", "isAdmin": "false"},
    { "ID_TK": "6", "email": "tboncoeur5@wufoo.com", "sdt": "5349083640", "hoten": "Terza Boncoeur", "ngaysinh": "2022-01-01", "password": "uLUyEza9", "isAdmin": "false"},
    { "ID_TK": "7", "email": "tparsonage6@1688.com", "sdt": "2082668806", "hoten": "Trev Parsonage", "ngaysinh": "2022-01-01", "password": "kyPqW6xt", "isAdmin": "false"},
    { "ID_TK": "8", "email": "dhaxley7@cargocollective.com", "sdt": "2032606151", "hoten": "Devon Haxley", "ngaysinh": "2022-01-01", "password": "t4eri3X", "isAdmin": "false"},
    { "ID_TK": "9", "email": "rblazejewski8@hc360.com", "sdt": "5162430472", "hoten": "Ruthi Blazejewski", "ngaysinh": "2022-01-01", "password": "tfyXM90CULE", "isAdmin": "false"},
    { "ID_TK": "10", "email": "apetri9@geocities.com", "sdt": "2066558327", "hoten": "Agnes Petri", "ngaysinh": "2022-01-01", "password": "UQKOt6B", "isAdmin": "false"}];
  items.forEach(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
  })
  await queryInterface.bulkInsert('TaiKhoans', items, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('TaiKhoans', null, {})
  }
};
