const Banner = require("../models/bannerModel");
const fs = require("fs");

exports.addBanner = async (req, res) => {
  const image = req?.file?.filename;
  const data = req?.body;

  try {
    if (!image) {
      return res.status(400).json({
        success: false,
        message: "Image is required",
      });
    }

    const isExist = await Banner.findOne({});
    if (isExist) {
      fs.unlink(`./uploads/banner/${image}`, (err) => {
        if (err) {
          console.log(err);
        }
      });

      return res.status(400).json({
        success: false,
        message: "Banner already exists",
      });
    }

    const info = {
      ...data,
      image: `banner/${image}`,
    };
    const result = await Banner.create(info);

    res.status(201).json({
      success: true,
      message: "Banner created successfully",
      data: result,
    });
  } catch (err) {
    fs.unlink(`./uploads/banner/${image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getBanner = async (req, res) => {
  try {
    const result = await Banner.findOne({});

    res.status(200).json({
      success: true,
      message: "Banner fetched successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.updateBanner = async (req, res) => {
  const id = req?.params?.id;
  const image = req?.file?.filename;
  const data = req?.body;

  try {
    const isExist = await Banner.findById(id);

    if (!isExist) {
      return res.status(404).json({
        success: false,
        message: "Banner not found",
      });
    }

    let newData;

    if (image && isExist?.image) {
      fs.unlink(`./uploads/${isExist?.image}`, (err) => {
        if (err) {
          console.log(err);
        }
      });
    }

    if (image) {
      newData = {
        ...data,
        image: `banner/${image}`,
      };
    } else {
      newData = { ...data, image: isExist?.image };
    }

    const result = await Banner.findByIdAndUpdate(id, newData, {
      new: true,
    });

    res.status(200).json({
      success: true,
      message: "Banner updated successfully",
      data: result,
    });
  } catch (error) {
    fs.unlink(`./uploads/${image}`, (err) => {
      if (err) {
        console.log(err);
      }
    });

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
