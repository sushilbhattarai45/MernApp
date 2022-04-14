const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://sushil:sushil123@cluster0.m0hhd.mongodb.net/app?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

require("../models/models.js");
