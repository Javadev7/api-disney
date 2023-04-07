const charactersService = require("../services/characters.service");

const getAllCharacters = async (req, res) => {
  try {
    const characters = await charactersService.getAll();
    res.status(200).json({ data: characters });
  } catch (error) {
    throw error;

  }
};

const createCharacter = async (req, res, next) => {
  try {
    const { id } = req.user;
    if(id != req.body.id )
    return next ({
      status: 401,
      message: "User no logged in",
      errorName: "Unauthorized",
    } )

    const character = await charactersService.createOne(req.body);
    res.status(200).json({ data: character });

  } catch (error) {
    
  }
}

const updateCharacter = async (req, res, next) => {
  try {
    const  idCharacter  = req.params.id;
    const { id }  = await charactersService.getOne(idCharacter);

    if (id != req.user.id) {
      return next ({
        status: 401,
        message: "User no logged in",
      })
    }

    await charactersService.updateOne(id, req.body);
    res.status(200).json({ status: 'success', data: null })

  } catch (error) {
    throw error.message; 
  }
}

const deleteCharacter = async (req, res, next) => {
  try {
    const id = req.params.id
    await charactersService.deleteOne(id);

    res.status(204).json({ status: 'deleted' });

  } catch (error) {
    throw error.message;
  }
}

module.exports = {getAllCharacters, createCharacter, updateCharacter, deleteCharacter};