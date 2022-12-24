'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chuyenxe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chuyenxe.belongsTo(models.NhaXe, {foreignKey: 'id_NX'});
    }
  }
  chuyenxe.init({
    IDChuyenXe: DataTypes.STRING,
    id_NX: DataTypes.STRING,
    moTaChinhSach: DataTypes.TEXT,
    imagePath: DataTypes.STRING,
    noiBatDau: DataTypes.STRING,
    noiKetThuc: DataTypes.STRING,
    gioKhoiHanh: DataTypes.DATE,
    gioKetThuc: DataTypes.DATE,
    tongThoiGian: DataTypes.TIME,
    loaiXe: DataTypes.STRING,
    tongSoGhe: DataTypes.INTEGER,
    soGheTrong: DataTypes.INTEGER,
    giaVe: DataTypes.BIGINT
  }, {
    sequelize,
    modelName: 'chuyenxe',
  });
  return chuyenxe;
};