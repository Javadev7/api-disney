const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User  = require('../models/User');
const { signup, login } = require('../controllers/auth.controller');

const router = express.Router();

/* En este código, utilizamos el modelo User en lugar de hacer consultas directamente a la base de datos. Para crear un nuevo usuario, usamos el método create y para buscar un usuario usamos el método findOne. También cambiamos el objeto de respuesta para que contenga solo las propiedades id y username. */

// Registro de usuario
router.post('/register', signup );

// Inicio de sesión
router.post('/login', login )

module.exports = router;