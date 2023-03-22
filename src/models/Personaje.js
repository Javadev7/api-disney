const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Pelicula = require("./Pelicula");

const Personaje = sequelize.define('personaje', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  imagen: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  edad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  peso: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  historia: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

  // Define la relación entre Personaje y Pelicula
  Personaje.belongsToMany(Pelicula, { through: 'PersonajePelicula' });
  Pelicula.belongsToMany(Personaje, { through: 'PersonajePelicula' });
  
module.exports =  Personaje;