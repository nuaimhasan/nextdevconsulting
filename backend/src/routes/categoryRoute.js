const express = require("express");
const router = express.Router();
const {
  addCategory,
  getCategories,
  getCategoryById,
  deleteCategoryById,
} = require("../controllers/categoryController");

// Category Routes
router.post("/add", addCategory);
router.get("/", getCategories);
router.get("/:id", getCategoryById);
router.delete("/delete/:id", deleteCategoryById);

module.exports = router;
