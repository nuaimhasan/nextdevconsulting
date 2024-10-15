const express = require("express");
const router = express.Router();
const {
  addCareer,
  getCareers,
  getCareerById,
  updateCareerById,
  deleteCareerById,
} = require("../controllers/careerController");

router.post("/add", addCareer);

router.get("/", getCareers);

router.get("/:id", getCareerById);

router.patch("/update/:id", updateCareerById);

router.delete("/delete/:id", deleteCareerById);

module.exports = router;
