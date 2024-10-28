const Career = require("../models/careerModel");

// Create a new career
exports.addCareer = async (req, res) => {
  const { title, role, location, type, description } = req.body;

  try {
    const newCareer = new Career({
      title,
      role,
      location,
      type,
      description,
    });

    const result = await newCareer.save();

    res.status(201).json({
      success: true,
      message: "Career created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all careers
exports.getCareers = async (req, res) => {
  try {
    const careers = await Career.find({});
    res.status(200).json({
      success: true,
      data: careers,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get career by ID
exports.getCareerById = async (req, res) => {
  const { id } = req.params;

  try {
    const career = await Career.findById(id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.status(200).json({
      success: true,
      data: career,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update career by ID
exports.updateCareerById = async (req, res) => {
  const { id } = req.params;
  const { title, role, location, type, description } = req.body;

  try {
    const career = await Career.findById(id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    career.title = title || career.title;
    career.role = role || career.role;
    career.location = location || career.location;
    career.type = type || career.type;
    career.description = description || career.description;

    const updatedCareer = await career.save();

    res.status(200).json({
      success: true,
      message: "Career updated successfully",
      data: updatedCareer,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete career by ID
exports.deleteCareerById = async (req, res) => {
  const { id } = req.params;

  try {
    const career = await Career.findByIdAndDelete(id);

    if (!career) {
      return res.status(404).json({
        success: false,
        message: "Career not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Career deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
