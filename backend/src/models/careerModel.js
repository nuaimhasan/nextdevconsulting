const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
});

const Career = mongoose.model("Career", careerSchema);

module.exports = Career;
