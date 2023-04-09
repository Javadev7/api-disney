const { DataTypes } = require('sequelize');
const  sequelize  = require('../db');

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

module.exports = Genre;