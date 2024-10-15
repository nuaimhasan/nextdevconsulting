const Leadership = require("../models/leadershipModel");

// Add a new person
exports.addLeadership = async (req, res) => {
  const { name, role } = req.body;
  const image = req.file?.filename; // Image uploaded via multer

  try {
    if (!name || !role || !image) {
      return res.status(400).json({
        success: false,
        message: "Name, role, and image are required.",
      });
    }

    const newLeadership = {
      name,
      role,
      image: `uploads/leadership/${image}`, // Store image path
    };

    const result = await Leadership.create(newLeadership);

    res.status(201).json({
      success: true,
      message: "leadership added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all people
exports.getLeadership = async (req, res) => {
  try {
    const result = await Leadership.find({});
    res.status(200).json({
      success: true,
      message: "leadership fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update a person by ID
exports.updateLeadership = async (req, res) => {
  const id = req.params.id;
  const { name, role } = req.body;
  const image = req.file?.filename;

  try {
    const isExist = await Leadership.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Leadership not found",
      });
    }

    const updatedData = {
      name: name || isExist.name,
      role: role || isExist.role,
      image: image ? `uploads/leadership/${image}` : isExist.image,
    };

    const result = await Leadership.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      success: true,
      message: "Leadership updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete a person by ID
exports.deleteLeadership = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await Leadership.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Leadership not found",
      });
    }

    await Leadership.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Leadership deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
