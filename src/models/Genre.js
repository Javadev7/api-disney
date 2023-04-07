const { DataTypes } = require('sequelize');
const  sequelize  = require('../db');
const Movie = require('./Movie');

const Genre = sequelize.define('genre', {
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

  // Define la relación entre Genero y Movie
  Genre.hasMany(Movie, { foreignKey: { allowNull: false } })
  Movie.belongsTo(Genre);

module.exports = Genre;