const teamModel = require("../models/Team.js");
const userModel = require("../models/User.js");

exports.CreateTeamService = async (req, res) => {
  try {
    const team = await teamModel.create(req.body);
    
    res.status(201).json({
      message: "Team created successfully",
      data: team,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.GetTeamService = async (req, res) => {
  try {
    const team = await teamModel.findById(req.params.id);
    res.status(200).json({
      message: "Team fetched successfully",
      data: team,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.GetTeamsService = async (req, res) => {
  try {
    const teams = await teamModel.find();
    res.status(200).json({
      message: "Teams fetched successfully",
      data: teams,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.UpdateTeamService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No team with that id" });
  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json({
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.DeleteTeamService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No team with that id" });
  try {
    const deletedTeam = await teamModel.findByIdAndRemove(_id);
    res.status(200).json({
      message: "Team deleted successfully",
      data: deletedTeam,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.AddTeamMemberService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No team with that id" });
  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(
      _id,
      { $push: { teamMembers: req.body } },
      {
        new: true,
      }
    );

    req.body.team.map(async (id) => {
      await userModel.findByIdAndUpdate(id,{ $push: { team: id } });
    });

    res.status(200).json({
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};

exports.RemoveTeamMemberService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No team with that id" });
  
  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(
      _id,
      { $pull: { teamMembers: req.body } },
      {
        new: true,
      }
    );

    await userModel.findByIdAndUpdate(req.body,{ $pull: { team: req.body } });

    res.status(200).json({
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    res.status(400).json({
      message: err.message,
    });
  }
};
