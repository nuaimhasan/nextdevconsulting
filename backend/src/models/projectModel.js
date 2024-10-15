const mongoose = require("mongoose");
const slugify = require("slugify");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
}, { timestamps: true });

projectSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true, strict: true });
  next();
});

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
