const app = require("./src/app.js");
const sequelize = require("./src/db");

require("./src/models/Personaje")
require("./src/models/Pelicula")
require("./src/models/Genero")
require("./src/models/User")

  async function main() {
  try {
  await sequelize.sync({force: false});
  app.listen(4000);
  console.log("Server on port 4000");
} catch (error) {
  console.error("Error syncing Sequelize models:", error);
  process.exit(1);
}
}

main();