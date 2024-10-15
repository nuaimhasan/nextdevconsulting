const mongoose = require("mongoose");

const serviceSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const ServicesSection = mongoose.model("ServicesSection", serviceSectionSchema);

module.exports = ServicesSection;
