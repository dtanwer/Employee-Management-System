const bcrypt = require("bcrypt");
const userModel = require("../models/User.js");
const leaveBankModel = require("../models/LeaveBank.js");
const { modifidedUserResponce, modifidedUsersResponce } = require("../utils/modifidedResponce.js");

exports.createUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash("123", 10);
    const leaveBank = await leaveBankModel.create({});
    const newUser = await userModel.create({
      ...req.body,
      password: hashedPassword,
      leaveBankId: leaveBank._id,
    });

    const modifiedUser=modifidedUserResponce(newUser);
    res.status(201).json({
      status:"success",
      message: "User created successfully",
      data: modifiedUser,
    });
  } catch (err) {
    res.status(400).json({
      status:"error",
      message: err.message,
    });
  }
}

exports.getUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    const modifiedUsers=modifidedUsersResponce(users);
    res.status(200).json({
      status:"success",
      message: "Users fetched successfully",
      data: modifiedUsers,
    });
  } catch (err) {
    res.status(400).json({
      status:"error",
      message: err.message,
    });
  }
};

exports.getUser = async (req, res) => {
  const id = req.params.id;
  try {
    const user = await userModel.findById(id);
    const modifiedUser=modifidedUserResponce(user);
    res.status(200).json({
      status:"success",
      message: "User fetched successfully",
      data: modifiedUser,
    });
  } catch (err) {
    res.status(400).json({
      status:"error",
      message: err.message,
    });
  }
};

exports.updateUser = async (req, res) => {
  const id = req.params.id;
  const { password } = req.body;
  try {
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      req.body.password = hashedPassword;
    }
    const updatedUser = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({
      status:"success",
      message: "User updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    res.status(400).json({
      status:"error",
      message: err.message,
    });
  }
};

exports.deleteUser = async (req, res) => {
  const id = req.params.id;
  try {
    await userModel.findByIdAndDelete(id);
    res.status(200).json({
      status:"success",
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status:"error",
      message: err.message,
    });
  }
};
