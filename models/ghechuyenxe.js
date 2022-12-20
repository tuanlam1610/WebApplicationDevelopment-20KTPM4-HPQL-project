'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GheChuyenXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GheChuyenXe.init({
    IDChuyenXe: DataTypes.STRING,
    viTriGhe: DataTypes.STRING,
    trangThaiGhe: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GheChuyenXe',
  });
  return GheChuyenXe;
};