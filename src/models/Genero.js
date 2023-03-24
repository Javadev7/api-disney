const { DataTypes } = require('sequelize');
const  sequelize  = require('../db');
const Pelicula = require('./Pelicula');

const Genero = sequelize.define('genero', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

  // Define la relación entre Genero y Pelicula
  Genero.hasMany(Pelicula, { foreignKey: { allowNull: false } })
  Pelicula.belongsTo(Genero);

module.exports = Genero;