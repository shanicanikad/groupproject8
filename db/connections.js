const mongoose = require("mongoose");

let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
  } else {
    mongoURI = "mongodb://localhost/WomenFashion";
  }

mongoose.connect(mongoURI, {useNewUrlParser:true, useUnifiedTopology: true});

module.exports = mongoose;