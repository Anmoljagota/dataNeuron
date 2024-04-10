const mongoose = require("mongoose");
const Schema = mongoose.Schema({
  image: String,
  name: String,
  field: String,
  position: String,
  EmployeType: String,
});

const Crudmodel = mongoose.model("crud", Schema);
module.exports = Crudmodel;
