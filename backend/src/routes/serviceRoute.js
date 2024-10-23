const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addService,
  getServices,

  getServiceById,
  updateServiceById,
  deleteServiceById,
} = require("../controllers/serviceController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/services");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
});

// Project Routes
router.post("/add", upload.single("image"), addService);
router.get("/", getServices);
router.get("/:id", getServiceById);
router.patch("/update/:id", upload.single("image"), updateServiceById);
router.delete("/delete/:id", deleteServiceById);

module.exports = router;
