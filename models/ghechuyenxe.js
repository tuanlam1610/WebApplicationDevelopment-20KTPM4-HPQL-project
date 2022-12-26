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
      GheChuyenXe.hasMany(models.VeXe, {foreignKey: 'IDChuyenXe'});
      GheChuyenXe.hasMany(models.VeXe, {foreignKey: 'viTriGhe'});
      GheChuyenXe.belongsTo(models.chuyenxe, {foreignKey: 'IDChuyenXe'})
    }
  }
  GheChuyenXe.init({
    IDChuyenXe: DataTypes.CHAR(8),
    viTriGhe: DataTypes.CHAR(3),
    trangThaiGhe: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GheChuyenXe',
  });
  return GheChuyenXe;
};