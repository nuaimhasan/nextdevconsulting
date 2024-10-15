const mongoose = require("mongoose");

const valueSchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
});

const Value = mongoose.model("Value", valueSchema);

module.exports = Value;
