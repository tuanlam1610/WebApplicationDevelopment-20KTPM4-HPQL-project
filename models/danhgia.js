'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DanhGia extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      DanhGia.belongsTo(models.TaiKhoan, {foreignKey: 'ID_TK'});
      DanhGia.belongsTo(models.NhaXe, {foreignKey: 'ID_NX'});
    }
  }
  DanhGia.init({
    ID_NX: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ID_TK: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    ngayDanhGia: DataTypes.DATEONLY,
    loaiGhe: DataTypes.STRING,
    soSao: {
      type: DataTypes.INTEGER,
      validate: {
        min: 1,
        max: 5
      }
    },
    noiDung: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'DanhGia',
  });
  return DanhGia;
};