const mongoose = require("mongoose");

const officesSchema = new mongoose.Schema({
  city: {
    type: String,
    allowNull: false,
  },
  address: {
    type: String,
    allowNull: false,
  },
  phone: {
    type: String,
    allowNull: false,
  },
  image: {
    type: String,
    allowNull: false,
  },
});

const Offices = mongoose.model("Offices", officesSchema);

module.exports = Offices;
