const character =  require("../models/Character")

class charactersService {
  static async getAll() {
     try {
        return await character.findAll();
     } catch (err) {
       throw err
     }

  }

  static async getOne(id) {
    try {
      return await character.findByPk(id)
    } catch (error) {
      throw error;
    }
  }

  static async createOne(data) {
    try {
      return await character.create(data);
    } catch (err) {
      throw err
    }
  }

  static async updateOne(characterId, body) {
    try {
      return await character.update( body, {
        where: { id: characterId }
      })
    } catch (error) {
      throw error;
    }
}

  static async deleteOne(id) {
    try {
      return await character.destroy({
          where: { id: id }
      }
    );
    } catch (error) {
      throw error.message;
    }
  }

}

module.exports = charactersService;