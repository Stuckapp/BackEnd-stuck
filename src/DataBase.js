const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

function connect() {
  return mongoose.connect(
    "mongodb+srv://Stuckapp:Motorefac@fish-chips.un9hh.mongodb.net/test",
    {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    }
  );
}

module.exports = { connect };
