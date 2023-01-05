'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NhaXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      NhaXe.hasMany(models.DanhGia, {foreignKey: 'ID_NX'});
      NhaXe.hasMany(models.ChuyenXe, {foreignKey: 'ID_NX'});
    }
  }
  NhaXe.init({
    ID_NX: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    tennhaxe: DataTypes.STRING,
    doangioithieu: DataTypes.TEXT,
    imagepath: DataTypes.TEXT,
    sdt: DataTypes.CHAR(10),
    diachi: DataTypes.TEXT,
    email: {
      type: DataTypes.STRING,
      unique: true,
      primaryKey: false
    },
    website: DataTypes.STRING,
    sosaoTB: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'NhaXe',
  });
  return NhaXe;
};