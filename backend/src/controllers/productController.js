const Product = require("../models/productModel");
const slugify = require("slugify");
const fs = require("fs");
const { pick } = require("../utils/pick");
const { calculatePagination } = require("../utils/calculatePagination");

exports.addProduct = async (req, res) => {
  const image = req?.file?.filename;
  const data = req?.body;

  if (!image) {
    return res.status(400).json({
      success: false,
      message: "Image is required",
    });
  }

  const slug = slugify(`${data?.title}-${Date.now()}`).toLowerCase();

  const product = {
    ...data,
    image,
    slug,
    rent: data?.rent && JSON.parse(data?.rent),
  };

  try {
    const result = await Product.create(product);

    res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getAllProducts = async (req, res) => {
  const paginationOptions = pick(req.query, ["page", "limit"]);
  const { category, subCategory, subSubCategory } = req?.query;

  let query = {};
  if (category && category != "undefined" && category != "null")
    query.category = category;
  if (subCategory && subCategory != "undefined" && subCategory != "null")
    query.subCategory = subCategory;
  if (
    subSubCategory &&
    subSubCategory != "undefined" &&
    subSubCategory != "null"
  )
    query.subSubCategory = subSubCategory;

  console.log(category);

  const { page, limit, skip } = calculatePagination(paginationOptions);

  try {
    const result = await Product.find(query)
      .skip(skip)
      .limit(limit)
      .populate("category subCategory subSubCategory");

    // let products = result;

    // if (category) {
    //   products = products.filter(
    //     (product) => product?.category?.slug === category
    //   );
    // }

    // if (subCategory) {
    //   products = products.filter(
    //     (product) => product?.subCategory?.slug === subCategory
    //   );
    // }

    // if (subSubCategory) {
    //   products = products.filter(
    //     (product) => product?.subSubCategory?.slug === subSubCategory
    //   );
    // }

    // const total = products.length;
    const total = await Product.countDocuments(query);
    const pages = Math.ceil(parseInt(total) / parseInt(limit));

    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: result,
      meta: {
        total,
        page,
        pages,
        limit,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductById = async (req, res) => {
  const id = req?.params?.id;

  try {
    const result = await Product.findById(id).populate(
      "category subCategory subSubCategory"
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getProductBySlug = async (req, res) => {
  try {
    const result = await Product.findOne({ slug: req?.params?.slug }).populate(
      "category subCategory subSubCategory"
    );

    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Product",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const id = req?.params?.id;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    fs.unlink(`./uploads/products/${product?.image}`, (err) => {
      if (err) {
        console.error(err);
      }
    });

    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateProduct = async (req, res) => {
  const id = req?.params?.id;
  const image = req?.file?.filename;
  const data = req?.body;

  const slug = slugify(`${data?.title}-${Date.now()}`).toLowerCase();

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    if (image) {
      fs.unlink(`./uploads/products/${product?.image}`, (err) => {
        if (err) {
          console.error(err);
        }
      });

      await Product.findByIdAndUpdate(
        id,
        {
          ...data,
          image,
          slug,
        },
        {
          new: true,
        }
      );
    } else {
      await Product.findByIdAndUpdate(
        id,
        {
          ...data,
          slug,
        },
        {
          new: true,
        }
      );
    }

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
