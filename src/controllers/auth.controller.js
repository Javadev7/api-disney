const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const UserServices = require("../services/user.service");
const AuthServices = require("../services/auth.service");

const signup = async (req, res) => {
  const { password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = {
      username: req.body.username,
      password: hashedPassword,
    };

    const user = await UserServices.createOne(newUser);
    const { username, password } = user;

    const token = await AuthServices.signToken(username, password);
    res
      .status(200)
      .json({ user: { id: newUser.id, username: newUser.username }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserServices.getOneByUsername(username);
    if (!user) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrectos" });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res
        .status(401)
        .json({ message: "Nombre de usuario o contraseña incorrectos" });
    }

    const {id} = user;

    const token = AuthServices.signToken({id, username});

    // const token = jwt.sign({ id: user.id }, "tu_secreto", { expiresIn: "1h" });
    res.json({ user: { id: user.id, username: user.username }, token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al iniciar sesión" });
  }
};

module.exports = { signup, login };
