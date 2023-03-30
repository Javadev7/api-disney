const { DataTypes } = require('sequelize');
const  sequelize  = require('../db');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  password: {
    type: DataTypes.TEXT,
    allowNull: false
  }

}, {
  sequelize,
  modelName: 'User'
});

module.exports = User;