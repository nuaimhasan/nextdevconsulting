const mongoose = require("mongoose");

const officeSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const OfficeSection = mongoose.model(
  "OfficeSection",
  officeSectionSchema
);

module.exports = OfficeSection;
