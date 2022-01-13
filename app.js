const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./config/db");
const User = require("./models/doctor/user");
const router = require("./routes");
const mongoose = require("mongoose");


require("dotenv").config();
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./"));

app.use(
  session({
    secret: "#%^67V000y(>J@q73!u",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

// connectDB();
mongoose.connect(process.env.MONGODB_URL);

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/", router);

app.listen(process.env.PORT || 5000, () => {
  console.log("server is running!");
});
