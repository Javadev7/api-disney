const User = require("../models/User");

class UserServices {
  static async createOne(newUser) {
    try {
      return await User.create(newUser);
    } catch (error) {
      console.log(error.message);
      throw error.message;
      
    }
  }

  static async getOneByUsername(username) {
    try {
      return await User.findOne({
        where: { username },
      });
    } catch (error) {
      throw error.message;;
    }
  }

}

module.exports = UserServices;
