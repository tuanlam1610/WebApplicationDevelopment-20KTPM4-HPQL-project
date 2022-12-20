'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('KhachHangs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_KH: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      sdt: {
        type: Sequelize.STRING
      },
      hoten: {
        type: Sequelize.STRING
      },
      ngaysinh: {
        type: Sequelize.DATE
      },
      password: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('KhachHangs');
  }
};