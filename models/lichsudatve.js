'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LichSuDatVe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      LichSuDatVe.belongsTo(models.TaiKhoan, {foreignKey: 'ID_TK'});
      LichSuDatVe.belongsTo(models.VeXe, {foreignKey: 'ID_Ve'});
    }
  }
  LichSuDatVe.init({
    ID_TK: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ID_Ve: { 
      type: DataTypes.CHAR(8),
      primaryKey: true
    },
    thoigiandat: DataTypes.DATE,
    trangthaive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LichSuDatVe',
  });
  return LichSuDatVe;
};