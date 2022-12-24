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
    }
  }
  LichSuDatVe.init({
    ID_TK: DataTypes.CHAR(8),
    ID_Ve: DataTypes.CHAR(8),
    thoigiandat: DataTypes.DATE,
    trangthaive: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LichSuDatVe',
  });
  return LichSuDatVe;
};