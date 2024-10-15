const People = require("../models/peopleModel");

// Add a new person
exports.addPerson = async (req, res) => {
  const { name, role } = req.body;
  const image = req.file?.filename; // Image uploaded via multer

  try {
    if (!name || !role || !image) {
      return res.status(400).json({
        success: false,
        message: "Name, role, and image are required.",
      });
    }

    const newPerson = {
      name,
      role,
      image: `uploads/people/${image}`, // Store image path
    };

    const result = await People.create(newPerson);

    res.status(201).json({
      success: true,
      message: "Person added successfully",
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
exports.getPeople = async (req, res) => {
  try {
    const result = await People.find({});
    res.status(200).json({
      success: true,
      message: "People fetched successfully",
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
exports.updatePerson = async (req, res) => {
  const id = req.params.id;
  const { name, role } = req.body;
  const image = req.file?.filename;

  try {
    const isExist = await People.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    }

    const updatedData = {
      name: name || isExist.name,
      role: role || isExist.role,
      image: image ? `uploads/people/${image}` : isExist.image,
    };

    const result = await People.findByIdAndUpdate(id, updatedData, { new: true });

    res.status(200).json({
      success: true,
      message: "Person updated successfully",
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
exports.deletePerson = async (req, res) => {
  const id = req.params.id;

  try {
    const isExist = await People.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Person not found",
      });
    }

    await People.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Person deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
