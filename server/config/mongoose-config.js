const mongoose = require("mongoose");

const mongoConnection = async () => {
  const URI = process.env.MONGODB_CONNECTION;
  const database = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    return mongoose.connect(URI, database);
  } catch (error) {
    console.log(error);
  }
};

module.exports = mongoConnection;
