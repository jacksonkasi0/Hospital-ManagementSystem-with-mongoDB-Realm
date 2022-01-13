const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  const MONGODB_URL="mongodb+srv://jacksonkasi:1855@jacksonkasi.fwlzq.mongodb.net/Hospital-Management-System?retryWrites=true&w=majority"
  try {
    const connect = await mongoose.connect(MONGODB_URL);
    console.log(`MonogoDB Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
