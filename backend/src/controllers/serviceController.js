const Service = require("../models/serviceModel");

// Add a new Service
exports.addService = async (req, res) => {
  const { title } = req.body;
  const image = req.file?.filename;

  try {
    if (!title || !image) {
      return res.status(400).json({
        success: false,
        message: "Title, and image are required.",
      });
    }

    const newService = new Service({
      title,
      image: `services/${image}`,
    });

    const result = await newService.save();

    res.status(201).json({
      success: true,
      message: "Service created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all Services
exports.getServices = async (req, res) => {
  try {
    const services = await Service.find();

    res.status(200).json({
      success: true,
      data: services,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get project by ID
exports.getServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findById(id);

    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      data: service,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update project by ID
exports.updateServiceById = async (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  const image = req.file?.filename;

  try {
    const service = await Service.findById(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    // Update project details
    service.title = title || service.title;
    service.image = image ? `services/${image}` : service.image;

    const updatedService = await service.save();

    res.status(200).json({
      success: true,
      message: "Service updated successfully",
      data: updatedService,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete project by ID
exports.deleteServiceById = async (req, res) => {
  const { id } = req.params;

  try {
    const service = await Service.findByIdAndDelete(id);
    if (!service) {
      return res.status(404).json({
        success: false,
        message: "Service not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Service deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
