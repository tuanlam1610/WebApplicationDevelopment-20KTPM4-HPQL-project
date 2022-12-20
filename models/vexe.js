'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class VeXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VeXe.init({
    IDVe: DataTypes.STRING,
    IDChuyenXe: DataTypes.STRING,
    viTriGhe: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'VeXe',
  });
  return VeXe;
};