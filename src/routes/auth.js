const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const pool = require('../db');

const router = express.Router();

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );
    const token = jwt.sign({ id: newUser.rows[0].id }, 'tu_secreto');
    res.json({ user: newUser.rows[0], token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al registrar usuario' });
  }
});

// Inicio de sesión
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await pool.query(
      'SELECT * FROM users WHERE username = $1',
      [username]
    );
    if (!user.rows.length) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
    const match = await bcrypt.compare(password, user.rows[0].password);
    if (!match) {
      return res.status(401).json({ message: 'Nombre de usuario o contraseña incorrectos' });
    }
    const token = jwt.sign({ id: user.rows[0].id }, 'tu_secreto');
    res.json({ user: user.rows[0], token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error al iniciar sesión' });
  }
});

module.exports = router;