const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const {
  addProject,
  getProjects,
  getLatestNewsProjects,
  getLatestStoryProjects,
  getProjectById,
  getRecentProjects,
  getProjectBySlug,
  updateProjectById,
  deleteProjectById,
} = require("../controllers/projectController");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/projects");
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
router.post("/add", upload.single("image"), addProject);
router.get("/", getProjects);
router.get("/recent", getRecentProjects);
router.get("/latest-news", getLatestNewsProjects);
router.get("/latest-story", getLatestStoryProjects);
router.get("/:id", getProjectById);
router.get("/slug/:slug", getProjectBySlug);
router.patch("/update/:id", upload.single("image"), updateProjectById);
router.delete("/delete/:id", deleteProjectById);

module.exports = router;
