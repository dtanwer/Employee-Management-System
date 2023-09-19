const leaveModel = require("../models/Leave");
const { getDaysBetweenDates, getDaysWithWeekends } = require("../utils/dates");

exports.CreateLeaveService = async (req, res) => {
  const leave = req.body;
  let message="Leave created successfully";
  let status="success"
  const numberOfDays = getDaysBetweenDates(leave.startDate, leave.endDate);
  if (numberOfDays > 3) {
    status="warning"
    message=`You can't take leave for more than 3 days (Total Days ${numberOfDays})`;
  }
  const toatlDaysWithWeekends = getDaysWithWeekends(leave.startDate, leave.endDate);
  console.log(toatlDaysWithWeekends,numberOfDays)
  if(toatlDaysWithWeekends!==numberOfDays){
    status="warning"
    message=`You Leave includes weekends(Total ${toatlDaysWithWeekends} Days) so you can't take leave for more than 3 days`
  }
  try {
    const newLeave = new leaveModel(leave);
    await newLeave.save();
    res.status(201).json({
      status,
      message,
      data: newLeave,
    });
  } catch (error) {
    res.status(409).json({ status:"error", message: error.message });
  }
};

exports.UpdateLeaveService = async (req, res) => {
  const { id: _id } = req.params;
  const leave = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  try {
    const updatedLeave = await leaveModel.findByIdAndUpdate(_id, leave, {
      new: true,
    });
    res.status(200).json({
      message: "Leave updated successfully",
      data: updatedLeave,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.DeleteLeaveService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  try {
    await leaveModel.findByIdAndRemove(_id);
    res.status(200).json({ message: "Leave deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.GetLeaveService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    res.status(400).json({
      message: "Invalid Id",
    });
  }
  try {
    const leave = await leaveModel.findById(_id);
    res.status(200).json({
      message: "Leave fetched successfully",
      data: leave,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.GetLeavesService = async (req, res) => {
  try {
    const leaves = await leaveModel.find();
    res.status(200).json({
      message: "Leaves fetched successfully",
      data: leaves,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
