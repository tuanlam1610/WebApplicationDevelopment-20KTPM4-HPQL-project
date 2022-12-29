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
      // GheChuyenXe.hasOne(models.VeXe, {foreignKey: 'IDChuyenXe'});
      GheChuyenXe.hasOne(models.VeXe, {foreignKey: 'viTriGhe'});
      GheChuyenXe.belongsTo(models.ChuyenXe, {foreignKey: 'IDChuyenXe'})
    }
  }
  GheChuyenXe.init({
    IDChuyenXe: { 
      type: DataTypes.CHAR(8),
      primaryKey: true
    },
    viTriGhe: { 
      type: DataTypes.CHAR(3),
      primaryKey: true
    },
    trangThaiGhe: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'GheChuyenXe',
  });
  return GheChuyenXe;
};