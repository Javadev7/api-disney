const express = require('express');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/', verifyToken, (req, res) => {
  res.json({ message: 'Esta es una ruta privada' });
});

module.exports = router;