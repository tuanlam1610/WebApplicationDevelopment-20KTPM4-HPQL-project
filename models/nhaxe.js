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
    }
  }
  NhaXe.init({
    ID_NX: DataTypes.CHAR(8),
    tennhaxe: DataTypes.STRING,
    doangioithieu: DataTypes.TEXT,
    imagepath: DataTypes.TEXT,
    sdt: DataTypes.CHAR(10),
    diachi: DataTypes.TEXT,
    email: DataTypes.STRING,
    website: DataTypes.STRING,
    sosaoTB: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'NhaXe',
  });
  return NhaXe;
};