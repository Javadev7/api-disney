const app = require("./src/app.js");
const sequelize = require("./src/db");
const initModels = require("./src/models/initModels.js");

// require("./src/models/Character")
// require("./src/models/Movie")
// require("./src/models/Genre")
// require("./src/models/User")
// require('./src/models/CharacterMovie')

  async function main() {
  // TODO ---> primero se de llama a las relaciones luego se sincroniza la DB
  try {
  initModels();
  await sequelize.sync({force: false});
  app.listen(4000);
  console.log("Server on port 4000");
} catch (error) {
  console.error("Error syncing Sequelize models:", error);
  process.exit(1);
}
}

main();