'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class KhachHang extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  KhachHang.init({
    ID_KH: DataTypes.CHAR(8),
    email: DataTypes.STRING,
    sdt: DataTypes.CHAR(10),
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.DATE,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'KhachHang',
  });
  return KhachHang;
};