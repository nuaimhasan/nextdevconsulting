const mongoose = require("mongoose");

const leadershipSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const LeadershipSection = mongoose.model(
  "LeadershipSection",
  leadershipSectionSchema
);

module.exports = LeadershipSection;
