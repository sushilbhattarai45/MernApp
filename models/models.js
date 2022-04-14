const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
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
const schema = mongoose.model("datas", employeeSchema);

module.exports = schema;
