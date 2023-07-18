const server = require("./src/app");
const PORT = 3001;
const { conn } = require("./src/db");

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log(`Server listen on Port: ${PORT}`);
});
