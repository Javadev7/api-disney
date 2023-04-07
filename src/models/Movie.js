const { DataTypes } = require('sequelize');
const  sequelize  = require('../db');

const Movie = sequelize.define('movie', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha_creacion: {
    type: DataTypes.DATE,
    allowNull: false
  },
  calificacion: {
    type: DataTypes.INTEGER,
    allowNull: false
  }

});



module.exports = Movie;
