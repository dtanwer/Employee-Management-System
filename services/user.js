const mongoose = require("mongoose");
const userModel = require("../models/User.js");

exports.createUser = async (req, res) => {
  try {
    const newUser = await userModel.create(req.body);
    res.status(201).json({
      message: "User created successfully",
      data: newUser,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.status(200).json({
      message: "Users fetched successfully",
      data: users,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  try {
    const user = await userModel.findById(id);
    res.status(200).json({
      message: "User fetched successfully",
      data: user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }

  try {
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }

  try {
    await userModel.findByIdAndDelete(id);
    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};
