const anouncementModel = require("../models/Announcement");
const mongoose = require("mongoose");

exports.CreateAnnouncementService = async (req, res) => {
  const announcement = req.body;
  try {
    const newAnnouncement = new anouncementModel(announcement);
    await newAnnouncement.save();
    res.status(201).json({
      message: "Announcement created successfully",
      data: newAnnouncement,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.UpdateAnnouncementService = async (req, res) => {
  const { id: _id } = req.params;
  const announcement = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No announcement with that id");
  try {
    const updatedAnnouncement = await anouncementModel.findByIdAndUpdate(
      _id,
      announcement,
      { new: true }
    );
    res.status(200).json({
      message: "Announcement updated successfully",
      data: updatedAnnouncement,
    });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.DeleteAnnouncementService = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No announcement with that id");
    try {
        await anouncementModel.findByIdAndRemove(_id);
        res.status(200).json({ message: "Announcement deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.GetAnnouncementService = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No announcement with that id");
    try {
        const announcement = await anouncementModel.findById(_id);
        res.status(200).json({ data: announcement });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.GetAnnouncementsService = async (req, res) => {
    try {
        const announcements = await anouncementModel.find();
        res.status(200).json({ data: announcements });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
