const Project = require("../models/projectModel");
const Category = require("../models/categoryModel");
const { default: slugify } = require("slugify");

// Add a new project
exports.addProject = async (req, res) => {
  const { title, description, category } = req.body;
  const image = req.file?.filename;

  try {
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    if (!title || !description || !image) {
      return res.status(400).json({
        success: false,
        message: "Title, description, and image are required.",
      });
    }

    const newProject = new Project({
      title,
      description,
      image: `projects/${image}`,
      category,
    });

    const result = await newProject.save();

    // Add project to the category
    categoryExists.projects.push(result._id);
    await categoryExists.save();

    res.status(201).json({
      success: true,
      message: "Project created successfully",
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get all projects
exports.getProjects = async (req, res) => {
  const { category } = req.query;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    const query = {};
    if (category) {
      query.category = category;
    }

    const skip = (page - 1) * limit;

    const projects = await Project.find(query)
      .populate("category", "name")
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const totalProjects = await Project.countDocuments(query);

    res.status(200).json({
      success: true,
      data: projects,
      totalPages: Math.ceil(totalProjects / limit),
      currentPage: page,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get project by ID
exports.getProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findById(id).populate("category", "name");

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getRecentProjects = async (req, res) => {
  try {
    const project = await Project.find({}).sort({ createdAt: -1 }).limit(5);
    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: project,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get project by slug
exports.getProjectBySlug = async (req, res) => {
  const { slug } = req.params;

  try {
    const project = await Project.findOne({ slug }).populate(
      "category",
      "name"
    );

    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    res.status(200).json({
      success: true,
      data: project,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getLatestNewsProjects = async (req, res) => {
  try {
    const newsProjects = await Project.find({})
      .populate({
        path: 'category',
        match: { name: "News" },
        select: 'name'
      })
      .sort({ createdAt: -1 })
      .limit(3);

    const filteredProjects = newsProjects.filter((project) => project.category);

    res.status(200).json({
      success: true,
      data: filteredProjects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getLatestStoryProjects = async (req, res) => {
  try {
    const storyProjects = await Project.find({})
      .populate({
        path: 'category',
        match: { name: "Story" },
        select: 'name'
      })
      .sort({ createdAt: -1 })

    const filteredProjects = storyProjects.filter((project) => project.category);

    res.status(200).json({
      success: true,
      data: filteredProjects,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Update project by ID
exports.updateProjectById = async (req, res) => {
  const { id } = req.params;
  const { title, description, category } = req.body;
  const image = req.file?.filename;

  try {
    const project = await Project.findById(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    const newCategory = await Category.findById(category);
    if (!newCategory) {
      return res.status(404).json({
        success: false,
        message: "Category not found",
      });
    }

    // If category is changing, remove project from old category
    if (project.category.toString() !== category) {
      const oldCategory = await Category.findById(project.category);
      if (oldCategory) {
        oldCategory.projects.pull(project._id);
        await oldCategory.save();
      }
      newCategory.projects.push(project._id);
      await newCategory.save();
    }

    // Update project details
    project.title = title || project.title;
    project.description = description || project.description;
    project.category = category || project.category;
    project.image = image ? `projects/${image}` : project.image;
    project.slug = slugify(project.title, { lower: true, strict: true });

    const updatedProject = await project.save();

    res.status(200).json({
      success: true,
      message: "Project updated successfully",
      data: updatedProject,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Delete project by ID
exports.deleteProjectById = async (req, res) => {
  const { id } = req.params;

  try {
    const project = await Project.findByIdAndDelete(id);
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found",
      });
    }

    // Remove project from associated category
    const category = await Category.findById(project.category);
    if (category) {
      category.projects.pull(project._id);
      await category.save();
    }

    res.status(200).json({
      success: true,
      message: "Project deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
