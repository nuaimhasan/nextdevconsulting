const Category = require("../models/categoryModel");

// Add a new category
exports.addCategory = async (req, res) => {
  const { name } = req.body;

  console.log(name)

  try {
    const category = new Category({ name });
    const result = await category.save();

    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({}).populate("projects");
    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get category by ID, populate projects
exports.getCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findById(id).populate("projects");

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete category by ID
exports.deleteCategoryById = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Category.findByIdAndDelete(id);

    if (!category) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
