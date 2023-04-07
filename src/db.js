const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('disney', 'postgres', 'Java0707', {
  host: 'localhost',
  dialect: 'postgres',
  //logging: (msg) => console.log('[Sequelize] ' + msg) // Activar salida de registro detallada con prefijo

});

sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa');
  })
  .catch((error) => {
    console.error('Error de conexión:', error);
  });


module.exports = sequelize;

