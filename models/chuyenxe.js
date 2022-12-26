'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ChuyenXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ChuyenXe.init({
    IDChuyenXe: DataTypes.CHAR(8),
    ID_NX: DataTypes.CHAR(8),
    moTaChinhSach: DataTypes.ARRAY(DataTypes.TEXT),
    imagePath: DataTypes.ARRAY(DataTypes.STRING),
    noiBatDau: DataTypes.STRING,
    noiKetThuc: DataTypes.STRING,
    gioKhoiHanh: DataTypes.DATE,
    gioKetThuc: DataTypes.DATE,
    tongThoiGian: DataTypes.TIME,
    loaiXe: DataTypes.STRING,
    tongSoGhe: DataTypes.INTEGER,
    soGheTrong: DataTypes.INTEGER,
    giaVe: DataTypes.BIGINT,
    tienIch: DataTypes.ARRAY(DataTypes.String)
  }, {
    sequelize,
    modelName: 'chuyenxe',
  });
  return chuyenxe;
};