const jwt = require("jsonwebtoken");

class AuthServices {
  static signToken(payload) {
    const token = jwt.sign(payload, "tu_secreto");
    return token;
  }
  catch(error) {
    console.log(error.message);
    throw error;
  }
}

module.exports = AuthServices;
