const Character = require("./Character");
const Genre = require("./Genre");
const Movie = require("./Movie");


const initModels = () => {

  // Define la relación entre Character y Movie
  Character.belongsToMany(Movie, { through: 'characterMovie' });
  Movie.belongsToMany(Character, { through: 'characterMovie' });

  // Define la relación entre Genero y Movie
  Genre.hasMany(Movie, { foreignKey: { allowNull: false } })
  Movie.belongsTo(Genre);

}

module.exports = initModels;