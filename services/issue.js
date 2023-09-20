const issueModel = require("../models/Issue");

exports.CreateIssueService = async (req, res) => {
  const issue = req.body;
  try {
    const newIssue = new issueModel(issue);
    await newIssue.save();
    res.status(201).json({
      status: "success",
      message: "Issue created successfully",
      data: newIssue,
    });
  } catch (error) {
    res.status(409).json({  status: "error", message: error.message });
  }
};

exports.UpdateIssueService = async (req, res) => {
  const { id: _id } = req.params;
  const issue = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    const updatedIssue = await issueModel.findByIdAndUpdate(_id, issue, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      message: "Issue updated successfully",
      data: updatedIssue,
    });
  } catch (error) {
    res.status(409).json({  status: "error", message: error.message });
  }
};

exports.DeleteIssueService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    await issueModel.findByIdAndRemove(_id);
    res.status(200).json({  status: "success", message: "Issue deleted successfully" });
  } catch (error) {
    res.status(409).json({  status: "error", message: error.message });
  }
};

exports.GetIssuesService = async (req, res) => {
  try {
    const issue = await issueModel.find();
    res
      .status(200)
      .json({
        issue: issue,
        status: "success",
        message: "Issues fetched successfully",
      });
  } catch (error) {
    res.status(404).json({ status: "error", message: error.message });
  }
};

exports.GetIssueService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    res.status(400).json({
      status: "warning",
      message: "Invalid Id",
    });
  }
  try {
    const issue = await issueModel.findById(_id);
    res
      .status(200)
      .json({
        status: "success",
        message: "Issue fetched successfully",
        data: issue,
      });
  } catch (error) {
    res.status(404).json({ status: "error", message: error.message });
  }
};
