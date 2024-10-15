const mongoose = require("mongoose");

const AboutSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectCount: {
    type: Number,
    required: true,
  },
  clientCount: {
    type: Number,
    required: true,
  },
  countriesCount: {
    type: Number,
    required: true,
  },
});

const AboutUs = mongoose.model("AboutUs", AboutSchema);

module.exports = AboutUs;
