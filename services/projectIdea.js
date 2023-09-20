const projectIdeaModel = require("../models/ProjectIdea");

exports.CreateProjectIdeaService = async (req, res) => {
  const projectIdea = req.body;
  try {
    const newProjectIdea = new projectIdeaModel(projectIdea);
    await newProjectIdea.save();
    res.status(201).json({
      status: "success",
      message: "ProjectIdea created successfully",
      data: newProjectIdea,
    });
  } catch (error) {
    res.status(409).json({  status: "error", message: error.message });
  }
};

exports.UpdateProjectIdeaService = async (req, res) => {
  const { id: _id } = req.params;
  const projectIdea = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    const updatedProjectIdea = await projectIdeaModel.findByIdAndUpdate(
      _id,
      projectIdea,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "ProjectIdea updated successfully",
      data: updatedProjectIdea,
    });
  } catch (error) {
    res.status(409).json({ status: "error",message: error.message });
  }
};

exports.DeleteProjectIdeaService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    await projectIdeaModel.findByIdAndRemove(_id);
    res.status(200).json({  status: "success", message: "ProjectIdea deleted successfully" });
  } catch (error) {
    res.status(409).json({  status: "error", message: error.message });
  }
};

exports.GetProjectIdeasService = async (req, res) => {
  try {
    const projectIdea = await projectIdeaModel.find();
    res.status(200).json({
      status: "success",
      message: "ProjectIdea fetched successfully",
      data: projectIdea,
    });
  } catch (error) {
    res.status(404).json({   status: "error",message: error.message });
  }
};

exports.GetProjectIdeaService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    const projectIdea = await projectIdeaModel.findById(_id);
    res
      .status(200)
      .json({   status: "success", message: "ProjectIdea fetched successfully", data: projectIdea });
  } catch (error) {
    res.status(409).json({   status: "error", message: error.message });
  }
};


