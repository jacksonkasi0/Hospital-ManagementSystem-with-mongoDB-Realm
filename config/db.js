const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {

  try {
    const connect = await mongoose.connect("mongodb+srv://jacksonkasi:1234@jacksonkasi.fwlzq.mongodb.net/Hospital-Management-System?retryWrites=true&w=majority");
    console.log(`MonogoDB Connected : ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
