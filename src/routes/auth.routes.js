const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User  = require('../models/User');

const router = express.Router();

/* En este código, utilizamos el modelo User en lugar de hacer consultas directamente a la base de datos. Para crear un nuevo usuario, usamos el método create y para buscar un usuario usamos el método findOne. También cambiamos el objeto de respuesta para que contenga solo las propiedades id y username. */


// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({ username, password: hashedPassword });
    const token = jwt.sign({ id: newUser.id }, 'tu_secreto');
    res.json({ user: { id: newUser.id, username: newUser.username }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
    const token = jwt.sign({ id: user.id }, 'tu_secreto', { expiresIn: '1h' });
    res.json({ user: { id: user.id, username: user.username }, token });
    console.log("token", token);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

module.exports = router;