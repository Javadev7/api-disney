const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { getAllCharacters, createCharacter, updateCharacter, deleteCharacter } = require('../controllers/characters.controller')

const router = express.Router();

router.get('/', verifyToken, getAllCharacters );

router.post('/', verifyToken, createCharacter );

router.put('/:id', verifyToken, updateCharacter );

router.delete('/:id', verifyToken, deleteCharacter );


module.exports = router;