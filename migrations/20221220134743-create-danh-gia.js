'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('DanhGia', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   ID_NX: {
    //     type: Sequelize.STRING
    //   },
    //   ID_KH: {
    //     type: Sequelize.STRING
    //   },
    //   ngayDanhGia: {
    //     type: Sequelize.DATE
    //   },
    //   loaiGhe: {
    //     type: Sequelize.STRING
    //   },
    //   soSao: {
    //     type: Sequelize.TINYINT
    //   },
    //   noiDung: {
    //     type: Sequelize.TEXT
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
    await queryInterface.addConstraint('DanhGias', {
      fields: ['loaiGhe'],
      type: 'check',
      where: {
         loaiGhe: ['Ghế ngồi', 'Giường nằm', 'Limousine']
      },
      name: "Check_LoaiGhe"
    });
    await queryInterface.addConstraint('DanhGias', {
      fields: ['soSao'],
      type: 'check',
      where: {
         soSao: [1,2,3,4,5]
      },
      name: "Check_SoSao"
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('DanhGia');
  }
};