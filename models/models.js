const mongoose = require("mongoose");

var employeeSchema = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  address: {
    type: String
  },
  contact: {
    type: String
  }
});
mongoose.model("data", employeeSchema);
