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
    [{  "email": "ntphu202@clc.fitus.edu.vn", "sdt": "1484297558", "hoten": "Nguyễn Thiên Phú", "ngaysinh": "2002-06-12", "password": "123", "isAdmin": "false"},
    {  "email": "nnquang20@clc.fitus.edu.vn", "sdt": "4316013419", "hoten": "Nguyễn Quang", "ngaysinh": "2002-09-17", "password": "123", "isAdmin": "false"},
    {  "email": "htlam20@clc.fitus.edu.vn", "sdt": "4013075497", "hoten": "Hà Tuấn Lâm", "ngaysinh": "2002-10-16", "password": "123", "isAdmin": "false"},
    {  "email": "tghuy201@clc.fitus.edu.vn", "sdt": "5958406601", "hoten": "Trương Gia Huy", "ngaysinh": "2002-12-06", "password": "123", "isAdmin": "false"},
    {  "email": "giatruong0612@gmail.com", "sdt": "3035927832", "hoten": "UnDeadCharger", "ngaysinh": "2002-12-06", "password": "123", "isAdmin": "false"},
    {  "email": "hpqlgroup@gmail.com", "sdt": "5349083640", "hoten": "Admin", "ngaysinh": "2022-01-01", "password": "123", "isAdmin": "true"},
    {  "email": "tparsonage6@1688.com", "sdt": "2082668806", "hoten": "Trev Parsonage", "ngaysinh": "2022-01-01", "password": "kyPqW6xt", "isAdmin": "false"},
    {  "email": "dhaxley7@cargocollective.com", "sdt": "2032606151", "hoten": "Devon Haxley", "ngaysinh": "2022-01-01", "password": "t4eri3X", "isAdmin": "false"},
    {  "email": "rblazejewski8@hc360.com", "sdt": "5162430472", "hoten": "Ruthi Blazejewski", "ngaysinh": "2022-01-01", "password": "tfyXM90CULE", "isAdmin": "false"},
    { "email": "apetri9@geocities.com", "sdt": "2066558327", "hoten": "Agnes Petri", "ngaysinh": "2022-01-01", "password": "UQKOt6B", "isAdmin": "false"}];
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
