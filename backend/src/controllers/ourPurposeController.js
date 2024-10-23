const OurPurpose = require("../models/ourPurposeModel");

exports.addOurPurpose = async (req, res) => {
  const data = req?.body;

  try {
    const isExist = await OurPurpose.findOne({});
    if (isExist) {
      return res.status(400).json({
        success: false,
        message: "OurPurpose Setting already exist",
      });
    }

    const result = await OurPurpose.create(data);

    res.status(201).json({
      success: true,
      message: "OurPurpose Setting created success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getOurPurpose = async (req, res) => {
  try {
    const result = await OurPurpose.findOne({});

    res.status(200).json({
      success: true,
      message: "OurPurpose Setting get success",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateOurPurpose = async (req, res) => {
  const id = req?.params?.id;
  const data = req?.body;

  try {
    const isExist = await OurPurpose.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "OurPurpose Setting not found",
      });
    }

    const result = await OurPurpose.findByIdAndUpdate(id, data, {
      new: true,
    });

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "OurPurpose Setting not updated",
      });
    }

    res.status(200).json({
      success: true,
      message: "OurPurpose Setting updated success",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
