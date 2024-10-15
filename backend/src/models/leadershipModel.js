const mongoose = require("mongoose");

const leadershipSchema = new mongoose.Schema({
  name: {
    type: String,
    allowNull: false,
  },
  role: {
    type: String,
    allowNull: false,
  },
  image: {
    type: String,
    allowNull: false,
  },
});

const Leadership = mongoose.model("Leadership", leadershipSchema);

module.exports = Leadership;
