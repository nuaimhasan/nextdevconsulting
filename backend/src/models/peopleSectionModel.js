const mongoose = require("mongoose");

const peopleSectionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
});

const PeopleSection = mongoose.model("PeopleSection", peopleSectionSchema);

module.exports = PeopleSection;
