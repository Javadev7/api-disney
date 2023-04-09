const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { getAllCharacters, createCharacter, updateCharacter, deleteCharacter, getDetailById } = require('../controllers/characters.controller')

const router = express.Router();

router.get('/', verifyToken, getAllCharacters );

router.get('/:id', verifyToken, getDetailById );

router.post('/', verifyToken, createCharacter );

router.put('/:id', verifyToken, updateCharacter );

router.delete('/:id', verifyToken, deleteCharacter );


module.exports = router;