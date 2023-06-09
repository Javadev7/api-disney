const { request } = require("express");
const moviesService = require("../services/movies.service");

const getAllMovies = async (req, res) => {
  try {
    const movies = await moviesService.getAll();
    res.status(200).json({ data: movies });
  } catch (error) {
    throw error;

  }
};

const getMovieDetailById = async (req, res) => {
  try {
    const movieId = req.params.id
    // const userId = req.user.id;

    const movie = await moviesService.getMovieDetail(movieId);
    res.status(200).json({ data: movie });
  } catch (error) {
    throw error.message;
  }
}

const createMovie = async (req, res, next) => {
  try {

    const movie = await moviesService.createOne(req.body);
    res.status(200).json({ data: movie });

  } catch (error) {
    console.log(error.message);
  }
}

const updateMovie = async (req, res, next) => {
  try {
    const  idMovie  = req.params.id;
    const { id }  = await moviesService.getOne(idMovie);

    await moviesService.updateOne(id, req.body);
    res.status(200).json({ status: 'success', data: null })

  } catch (error) {
    throw error.message; 
  }
}

const deleteMovie = async (req, res, next) => {
  try {
    const id = req.params.id
    await moviesService.deleteOne(id);

    res.status(204).json({ status: 'deleted' });

  } catch (error) {
    throw error.message;
  }
}

module.exports = { getAllMovies, getMovieDetailById, createMovie, updateMovie, deleteMovie };