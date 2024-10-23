const mongoose = require("mongoose");

const newsInsightSchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
});

const NewsInsight = mongoose.model("NewsInsight", newsInsightSchema);

module.exports = NewsInsight;
