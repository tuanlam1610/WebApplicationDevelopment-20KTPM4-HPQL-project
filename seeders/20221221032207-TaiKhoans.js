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
    [{ "ID_TK": "23602644", "email": "tczaple0@people.com.cn", "sdt": "1484297558", "hoten": "Torrey Czaple", "ngaysinh": "2022-01-01", "password": "S5bCnOvhQ" },
    { "ID_TK": "98769954", "email": "ifauguel1@blogs.com", "sdt": "4316013419", "hoten": "Illa Fauguel", "ngaysinh": "2022-01-01", "password": "yTb3LR2ILNB" },
    { "ID_TK": "92805751", "email": "bscarlan2@narod.ru", "sdt": "4013075497", "hoten": "Bone Scarlan", "ngaysinh": "2022-01-01", "password": "UKH2Ag" },
    { "ID_TK": "37052532", "email": "fmarrian3@devhub.com", "sdt": "5958406601", "hoten": "Franni Marrian", "ngaysinh": "2022-01-01", "password": "mk09rE7V" },
    { "ID_TK": "05444458", "email": "kmathan4@rakuten.co.jp", "sdt": "3035927832", "hoten": "Krista Mathan", "ngaysinh": "2022-01-01", "password": "TlSToWWMI" },
    { "ID_TK": "25195271", "email": "tboncoeur5@wufoo.com", "sdt": "5349083640", "hoten": "Terza Boncoeur", "ngaysinh": "2022-01-01", "password": "uLUyEza9" },
    { "ID_TK": "70456727", "email": "tparsonage6@1688.com", "sdt": "2082668806", "hoten": "Trev Parsonage", "ngaysinh": "2022-01-01", "password": "kyPqW6xt" },
    { "ID_TK": "51086217", "email": "dhaxley7@cargocollective.com", "sdt": "2032606151", "hoten": "Devon Haxley", "ngaysinh": "2022-01-01", "password": "t4eri3X" },
    { "ID_TK": "95837223", "email": "rblazejewski8@hc360.com", "sdt": "5162430472", "hoten": "Ruthi Blazejewski", "ngaysinh": "2022-01-01", "password": "tfyXM90CULE" },
    { "ID_TK": "90218160", "email": "apetri9@geocities.com", "sdt": "2066558327", "hoten": "Agnes Petri", "ngaysinh": "2022-01-01", "password": "UQKOt6B" }];
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
