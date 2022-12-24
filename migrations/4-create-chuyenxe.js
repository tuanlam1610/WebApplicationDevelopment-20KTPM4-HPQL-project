'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('chuyenxes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      IDChuyenXe: {
        type: Sequelize.STRING
      },
      id_NX: {
        type: Sequelize.STRING
      },
      moTaChinhSach: {
        type: Sequelize.TEXT
      },
      imagePath: {
        type: Sequelize.STRING
      },
      noiBatDau: {
        type: Sequelize.STRING
      },
      noiKetThuc: {
        type: Sequelize.STRING
      },
      gioKhoiHanh: {
        type: Sequelize.DATE
      },
      gioKetThuc: {
        type: Sequelize.DATE
      },
      tongThoiGian: {
        type: Sequelize.TIME
      },
      loaiXe: {
        type: Sequelize.STRING
      },
      tongSoGhe: {
        type: Sequelize.INTEGER
      },
      soGheTrong: {
        type: Sequelize.INTEGER
      },
      giaVe: {
        type: Sequelize.BIGINT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('chuyenxes');
  }
};