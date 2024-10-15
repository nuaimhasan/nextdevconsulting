const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getBanner,
  addBanner,
  updateBanner,
} = require("../controllers/bannerController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/banner");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 10000000 },
});

// Routes
router.get("/", getBanner);
router.post("/add", upload.single("image"), addBanner);
router.patch("/update/:id", upload.single("image"), updateBanner);

module.exports = router;
