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
      VeXe.belongsTo(models.GheChuyenXe, {foreignKey: 'IDChuyenXe'});
      //VeXe.belongsTo(models.GheChuyenXe, {foreignKey: 'viTriGhe'});
      VeXe.hasOne(models.LichSuDatVe, {foreignKey: 'ID_Ve'});
    }
  }
  VeXe.init({
    IDVe: { 
      type: DataTypes.CHAR(8),
      primaryKey: true
    },
    IDChuyenXe: DataTypes.CHAR(8),
    viTriGhe: DataTypes.CHAR(3)
  }, {
    sequelize,
    modelName: 'VeXe',
  });
  return VeXe;
};