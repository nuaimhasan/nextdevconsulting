const Offices = require("../models/officesModel");

// Add a new office
exports.addOffice = async (req, res) => {
  const { city, address, phone } = req.body;
  const image = req.file?.filename; // Image uploaded via multer

  try {
    if (!city || !address || !phone || !image) {
      return res.status(400).json({
        success: false,
        message: "City, address, phone, and image are required.",
      });
    }

    const newOffice = {
      city,
      address,
      phone,
      image: `uploads/offices/${image}`, // Store image path
    };

    const result = await Offices.create(newOffice);

    res.status(201).json({
      success: true,
      message: "Office added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all offices
exports.getOffices = async (req, res) => {
  try {
    const result = await Offices.find({});
    res.status(200).json({
      success: true,
      message: "Offices fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update an office by ID
exports.updateOffice = async (req, res) => {
  const id = req.params.id;
  const { city, address, phone } = req.body;
  const image = req.file?.filename;

  try {
    const isExist = await Offices.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Office not found",
      });
    }

    const updatedData = {
      city: city || isExist.city,
      address: address || isExist.address,
      phone: phone || isExist.phone,
      image: image ? `uploads/offices/${image}` : isExist.image,
    };

    const result = await Offices.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      success: true,
      message: "Office updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete an office by ID
exports.deleteOffice = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await Offices.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Office not found",
      });
    }

    await Offices.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Office deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
