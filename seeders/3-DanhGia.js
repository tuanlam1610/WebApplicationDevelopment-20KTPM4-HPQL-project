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
      "ID_NX": "81165038",
      "ID_TK": "23602644",
      "ngayDanhGia": "2022/09/14",
      "loaiGhe": "Ghế ngồi",
      "soSao": 3,
      "noiDung": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit."
    }, {
      "ID_NX": "81165038",
      "ID_TK": "98769954",
      "ngayDanhGia": "2022/03/17",
      "loaiGhe": "Ghế ngồi",
      "soSao": 3,
      "noiDung": "Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
    }, {
      "ID_NX": "81165038",
      "ID_TK": "92805751",
      "ngayDanhGia": "2022/12/11",
      "loaiGhe": "Giường nằm",
      "soSao": 1,
      "noiDung": "Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus."
    }, {
      "ID_NX": "89543639",
      "ID_TK": "23602644",
      "ngayDanhGia": "2022/03/28",
      "loaiGhe": "Giường nằm",
      "soSao": 5,
      "noiDung": "Sed ante. Vivamus tortor. Duis mattis egestas metus."
    }, {
      "ID_NX": "89543639",
      "ID_TK": "98769954",
      "ngayDanhGia": "2022/09/29",
      "loaiGhe": "Giường nằm",
      "soSao": 2,
      "noiDung": "Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    }]
    items.forEach(item => {
      item.createdAt = Sequelize.literal('NOW()');
      item.updatedAt = Sequelize.literal('NOW()');
    })
    await queryInterface.bulkInsert('DanhGias', items, {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('DanhGias', null, {})
  }
};