const leaveModel = require('../models/Leave');

exports.CreateLeaveService = async (req, res) => {
    const leave = req.body;
    try {
        const newLeave = new leaveModel(leave);
        await newLeave.save();
        res.status(201).json(
            {
                message: "Leave created successfully",
                data: newLeave
            }
        );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.UpdateLeaveService = async (req, res) => {
    const { id: _id } = req.params;
    const leave = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(400).json({
          message: "Invalid Id",
        });
      }
    try {
        const updatedLeave = await leaveModel.findByIdAndUpdate(
            _id,
            leave,
            { new: true }
        );
        res.status(200).json({
            message: "Leave updated successfully",
            data: updatedLeave
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

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
}

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
            data: leave
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.GetLeavesService = async (req, res) => {
    try {
        const leaves = await leaveModel.find();
        res.status(200).json({
            message: "Leaves fetched successfully",
            data: leaves
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}