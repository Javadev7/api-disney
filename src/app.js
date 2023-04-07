const express = require("express");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const session = require('express-session');
const authRoutes = require('./routes/auth.routes');
const moviesRoutes = require('./routes/movies.routes');
const charactersRoutes = require('./routes/characters.routes');

require('./db.js')

const app = express();

app.use(express.json());
app.use(session({
  secret: 'tu_secreto',
  resave: false,
  saveUninitialized: true,
}));
app.use('/auth', authRoutes);
app.use('/movies', moviesRoutes);
app.use('/characters', charactersRoutes)

app.use(morgan("dev"));
app.use(express.json());

// const JWT_SECRET = process.env.JWT_SECRET;


// Routes
/* app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes); */

module.exports = app;
