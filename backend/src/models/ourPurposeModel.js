const mongoose = require("mongoose");

const ourPurposeSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    keywords: {
      type: Array,
    },
  },
  { timestamps: false }
);

const OurPurpose = mongoose.model("OurPurpose", ourPurposeSchema);

module.exports = OurPurpose;
