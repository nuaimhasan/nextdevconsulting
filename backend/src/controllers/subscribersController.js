const Subscribers = require("../models/subscribersModel");

// Add a new subscriber
exports.addSubscriber = async (req, res) => {
  const { email } = req.body;

  try {
    if (!email) {
      return res.status(400).json({
        success: false,
        message: "Email is required",
      });
    }

    const newSubscriber = new Subscribers({
      email,
    });

    const result = await newSubscriber.save();

    res.status(201).json({
      success: true,
      message: "Subscriber added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all subscribers
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscribers.find({}).sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: subscribers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete subscriber by ID
exports.deleteSubscriberById = async (req, res) => {
  const { id } = req.params;
  
  try {
    const subscriber = await Subscribers.findByIdAndDelete(id);

    if (!subscriber) {
      return res.status(404).json({
        success: false,
        message: "Subscriber not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Subscriber deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
