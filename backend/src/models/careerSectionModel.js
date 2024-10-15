const mongoose = require("mongoose");

const careerSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const CareerSection = mongoose.model(
  "CareerSection",
  careerSectionSchema
);

module.exports = CareerSection;
