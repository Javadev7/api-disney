const jwt = require('jsonwebtoken');

function verifyToken(req, res, next) {
  const bearer = req.headers.authorization;
  if (!bearer) {
    return res.status(401).json({ message: 'No se ha proporcionado un token' });
  }
  try {
    const token = bearer.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'tu_secreto');
    req.user = decoded;
    console.log(decoded, req.user)
    next();
  } catch (err) {
    console.error(err);
    res.status(401).json({ message: 'Token no válido' });
  }
}

module.exports = verifyToken;