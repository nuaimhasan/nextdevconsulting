const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
