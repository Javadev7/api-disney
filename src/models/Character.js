const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const Movie = require("./Movie");

const Character = sequelize.define('character', {
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

  // Define la relación entre Character y Movie
  Character.belongsToMany(Movie, { through: 'characterMovie' });
  Movie.belongsToMany(Character, { through: 'characterMovie' });
  
module.exports =  Character;