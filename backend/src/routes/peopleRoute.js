const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const { addPerson, getPeople, updatePerson, deletePerson } = require("../controllers/peopleController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/people");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 2000000 },
});

// Routes
router.get("/", getPeople);
router.post("/add", upload.single("image"), addPerson);
router.patch("/update/:id", upload.single("image"), updatePerson);
router.delete("/delete/:id", deletePerson);

module.exports = router;
