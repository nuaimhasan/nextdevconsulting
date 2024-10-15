const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getAboutUs,
  updateAboutUs,
  createAboutUs,
} = require("../controllers/aboutController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/aboutus");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

router.get("/", getAboutUs);
router.post("/add-about", upload.single("image"), createAboutUs);
router.patch("/update-about/:id", upload.single("image"), updateAboutUs);

module.exports = router;
