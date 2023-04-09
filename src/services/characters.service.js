const character = require("../models/Character");
const characterMovie = require("../models/CharacterMovie");
const movie = require("../models/Movie");

class charactersService {
  static async getAll() {
    try {
      return await character.findAll();
    } catch (err) {
      throw err;
    }
  }

  static async getOne(id) {
    try {
      return await character.findByPk(id);
    } catch (error) {
      throw error;
    }
  }

  static async getCharacterDetail(characterId) {
    try {
      const characterData =  await character.findOne({
        where: {
          id: characterId,
        }, 
        include: {
          model: movie
        }
      })
      const newCharacterData = await characterData.toJSON();
      // const characterDetail = await this._getMovies(characterId)
      // newCharacterData.characterDetail = characterDetail
      // return newCharacterData;
      return newCharacterData;
    } catch (error) {

    }
  }

  static async createOne(data) {
    try {
      return await character.create(data);
    } catch (err) {
      throw err;
    }
  }

  static async updateOne(characterId, body) {
    try {
      return await character.update(body, {
        where: { id: characterId },
      });
    } catch (error) {
      throw error;
    }
  }

  static async deleteOne(id) {
    try {
      return await character.destroy({
        where: { id: id },
      });
    } catch (error) {
      throw error.message;
    }
  }

  /* static async _getMovies(characterId) {
    try {
      const retrievedMovies = await characterMovie.findAll({
        where: { characterId }
      })
      return retrievedMovies.map(movies => movies.toJSON())
      
    } catch (error) {
      throw error.message;
    }
  }  */

}



module.exports = charactersService;
