const mongoose = require("mongoose");

const whoWeAreSchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
});

const WhoWeAre = mongoose.model("WhoWeAre", whoWeAreSchema);

module.exports = WhoWeAre;
