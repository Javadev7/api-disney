const character = require("../models/Character");
const characterMovie = require("../models/CharacterMovie");
const movie = require("../models/Movie");

class moviesService {
  static async getAll() {
    try {
      return await movie.findAll();
    } catch (err) {
      throw err;
    }
  }

  static async getOne(id) {
    try {
      return await movie.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async getMovieDetail(movieId) {
    try {
      const movieData =  await movie.findOne({
        where: {
          id: movieId,
        }, 
        include: {
          model: character
        }
      })
      const newMovieData = await movieData.toJSON();
      // const characterDetail = await this._getMovies(characterId)
      // newCharacterData.characterDetail = characterDetail
      // return newCharacterData;
      return newMovieData;
    } catch (error) {

    }
  }

  static async createOne(data) {
    try {
      return await movie.create(data);
    } catch (err) {
      throw err;
    }
  }

  static async updateOne(movieId, body) {
    try {
      return await movie.update(body, {
        where: { id: movieId },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      return await movie.destroy({
        where: { id: id },
      });
    } catch (error) {
      throw error.message;
    }
  }

}

module.exports = moviesService;
