const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addOffice,
  getOffices,
  updateOffice,
  deleteOffice,
} = require("../controllers/officesController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/offices");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5000000 },
});

// Routes
router.get("/", getOffices);
router.post("/add", upload.single("image"), addOffice);
router.patch("/update/:id", upload.single("image"), updateOffice);
router.delete("/delete/:id", deleteOffice);

module.exports = router;
