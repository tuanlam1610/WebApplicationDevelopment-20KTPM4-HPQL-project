'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('NhaXes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ID_NX: {
        type: Sequelize.STRING
      },
      tennhaxe: {
        type: Sequelize.STRING
      },
      doangioithieu: {
        type: Sequelize.TEXT
      },
      imagepath: {
        type: Sequelize.TEXT
      },
      sdt: {
        type: Sequelize.STRING
      },
      diachi: {
        type: Sequelize.TEXT
      },
      email: {
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
    await queryInterface.dropTable('NhaXes');
  }
};