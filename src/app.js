const express = require("express");
const morgan = require("morgan");

require('./db.js')

const app = express();

// Import routes
/* import projectRoutes from "./routes/projects.routes.js";
import taskRoutes from "./routes/tasks.routes.js"; */

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
/* app.use("/api/projects", projectRoutes);
app.use("/api/tasks", taskRoutes); */

module.exports = app;
