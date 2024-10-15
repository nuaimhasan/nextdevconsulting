const express = require("express");
const router = express.Router();
const {
  addSubscriber,
  getSubscribers,
  deleteSubscriberById,
} = require("../controllers/subscribersController");

// Create a new subscriber
router.post("/add", addSubscriber);

// Get all subscribers
router.get("/", getSubscribers);

// Delete subscriber by ID
router.delete("/delete/:id", deleteSubscriberById);

module.exports = router;
