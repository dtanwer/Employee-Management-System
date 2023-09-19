const leaveBankModel = require("../models/LeaveBank.js");
exports.createLeaveBankService = async (req, res) => {
  try {
    const leaveBank = await leaveBankModel.create({});
    res.status(201).json({
      status: "success",
      message: "LeaveBank created successfully",
      data: leaveBank,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getLeaveBanksService = async (req, res) => {
  try {
    const leaveBanks = await leaveBankModel.find();
    res.status(200).json({
      status: "success",
      message: "LeaveBanks fetched successfully",
      data: leaveBanks,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.getLeaveBankService = async (req, res) => {
  const id = req.params.id;
  try {
    const leaveBank = await leaveBankModel.findById(id);
    res.status(200).json({
      status: "success",
      message: "LeaveBank fetched successfully",
      data: leaveBank,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.updateLeaveBankService = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedLeaveBank = await leaveBankModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    res.status(200).json({
      status: "success",
      message: "LeaveBank updated successfully",
      data: updatedLeaveBank,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};
