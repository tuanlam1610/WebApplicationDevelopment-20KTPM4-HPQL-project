'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TaiKhoan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      //TaiKhoan.hasMany(models.DanhGia, {foreignKey: 'ID_KH'});
    }
  }
  TaiKhoan.init({
    ID_TK: {
      type: DataTypes.CHAR(8),
      primaryKey: true
    },
    email: DataTypes.STRING,
    sdt: DataTypes.CHAR(10),
    hoten: DataTypes.STRING,
    ngaysinh: DataTypes.STRING,
    password: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TaiKhoan',
  });
  return TaiKhoan;
};