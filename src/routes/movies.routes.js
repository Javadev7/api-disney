const express = require('express');
const verifyToken = require('../middleware/verifyToken');
const { getAllMovies, getMovieDetailById, createMovie, updateMovie, deleteMovie } = require('../controllers/movies.controller');


const router = express.Router();

router.get('/', verifyToken, getAllMovies );

router.get('/:id', verifyToken, getMovieDetailById  );

router.post('/', verifyToken, createMovie );

router.put('/:id', verifyToken, updateMovie );

router.delete('/:id', verifyToken, deleteMovie );


module.exports = router;