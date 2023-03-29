const express = require("express");
const morgan = require("morgan");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


require('./db.js')

const app = express();

// Import routes
/* import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js"; */

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET;


// Routes
/* app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes); */

module.exports = app;
