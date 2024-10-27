const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  description: {
    type: String,
    allowNull: false,
  },
  impactAssessment: {
    type: String,
    allowNull: false,
  },
  sustainableAgriculture: {
    type: String,
    allowNull: false,
  },
  transportInfrastructure: {
    type: String,
    allowNull: false,
  },
  climateEnergy: {
    type: String,
    allowNull: false,
  },
  policyFormulation: {
    type: String,
    allowNull: false,
  },
  research: {
    type: String,
    allowNull: false,
  },
  grantManagement: {
    type: String,
    allowNull: false,
  },
  capacityBuilding: {
    type: String,
    allowNull: false,
  },
  technicalAssistance: {
    type: String,
    allowNull: false,
  },
  digitalTransformation: {
    type: String,
    allowNull: false,
  },
});

const History = mongoose.model("History", historySchema);

module.exports = History;
