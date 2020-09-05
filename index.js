require("dotenv").config();
const server = require("./src/server");
const db = require("./src/lib/db");

async function main() {
  await db.connect();
  console.log("DB listening");
  server.listen(8080, () => {
    console.log("server is running");
  });
}

main()
  .then(() => {
    console.log("server is ready");
  })
  .catch((error) => console.log("error", error));
