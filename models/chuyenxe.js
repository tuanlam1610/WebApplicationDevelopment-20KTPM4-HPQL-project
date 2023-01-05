'use strict';
const {
  Model
} = require('sequelize');
const ghechuyenxe = require('./ghechuyenxe');
module.exports = (sequelize, DataTypes) => {
  class ChuyenXe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ChuyenXe.belongsTo(models.NhaXe, {foreignKey: 'ID_NX'});
      ChuyenXe.hasMany(models.GheChuyenXe, {foreignKey: 'IDChuyenXe'});
      ChuyenXe.hasMany(models.VeXe, {foreignKey: 'IDChuyenXe'});
    }
  }
  ChuyenXe.init({
    IDChuyenXe:{ 
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    ID_NX: DataTypes.INTEGER,
    moTaChinhSach: DataTypes.ARRAY(DataTypes.TEXT),
    imagePath: DataTypes.ARRAY(DataTypes.STRING),
    diemDon: DataTypes.ARRAY(DataTypes.STRING),
    diemTra: DataTypes.ARRAY(DataTypes.STRING),
    tpDi: DataTypes.STRING,
    tpDen: DataTypes.STRING,
    gioKhoiHanh: DataTypes.DATE,
    gioKetThuc: DataTypes.DATE,
    tongThoiGian: DataTypes.TIME,
    loaiXe: DataTypes.STRING,
    tongSoGhe: DataTypes.INTEGER,
    soGheTrong: DataTypes.INTEGER,
    giaVe: DataTypes.BIGINT,
    tienIch: DataTypes.ARRAY(DataTypes.STRING)
  }, {
    sequelize,
    modelName: 'ChuyenXe',
  });
  return ChuyenXe;
};