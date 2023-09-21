const teamModel = require("../models/Team.js");
const userModel = require("../models/User.js");

exports.CreateTeamService = async (req, res) => { 
  const team = req.body;
  const session = await teamModel.startSession();
  session.startTransaction();
  try {
    const newTeam = await teamModel.create([team], { session });

    //Updating the users collection of the users that are in the team
    const usersToAdd =  req.body.teamMembers.map(async (id) => {
     return await userModel.findByIdAndUpdate(id, {
        $push: { team: newTeam._id, teamLead: newTeam.teamLead },
      }, session);
    });

   if(newTeam && usersToAdd){
      await session.commitTransaction();
      session.endSession();
      res.status(201).json({
        status: "success",
        message: "Team created successfully",
        data: team,
      });

   }
   else{
      await session.abortTransaction();
      session.endSession();
      res.status(400).json({
        status: "error",
        message: "Cannot create team",
      });
   }

   
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.GetTeamService = async (req, res) => {
  try {
    const team = await teamModel.findById(req.params.id);
    res.status(200).json({
      status: "success",
      message: "Team fetched successfully",
      data: team,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.GetTeamsService = async (req, res) => {
  try {
    const teams = await teamModel.find();
    res.status(200).json({
      status: "success",
      message: "Teams fetched successfully",
      data: teams,
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.UpdateTeamService = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(200).json({
      status: "success",
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.DeleteTeamService = async (req, res) => {
  const { id: _id } = req.params;
 
  try {
    const deletedTeam = await teamModel.findByIdAndRemove(_id);
    res.status(200).json({
      status: "success",
      message: "Team deleted successfully",
      data: deletedTeam,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: err.message,
    });
  }
};

exports.AddTeamMemberService = async (req, res) => {
  const { id: _id } = req.params;   //team id

  try {
    const updatedTeam = await teamModel.findByIdAndUpdate(
      _id,
      { $push: {teamMembers:{ "$each": req.body.team }}},
      {
        new: true,
      }
    );
      //Pushing the team's id in users defined model 
    req.body.team.map(async(id)=>{
       await userModel.findByIdAndUpdate(id, {$push :{team : updatedTeam._id, teamLead: updatedTeam.teamLead}})
    })

    res.status(200).json({
      status: "success",
      message: "Team updated successfully",
      data: updatedTeam,
    });
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};

exports.RemoveTeamMemberService = async (req, res) => {
  const { id: _id } = req.params;
  const {userId} = req.body;

  const session = await teamModel.startSession();
  session.startTransaction();

  try {

    const updatedTeam = await teamModel.findByIdAndUpdate(_id,{ $pull: { teamMembers: userId} }, {new: true,}, session);
    const updatedUser  =  await userModel.findByIdAndUpdate(userId , { $pull: { team: _id } }, session);

    if(updatedUser && updatedTeam){
      await session.commitTransaction();
      session.endSession();
      res.status(200).json({
        status: "success",
        message: "Team updated successfully",
        data: updatedTeam,
      });
    }
    else{
       await session.abortTransaction();
        session.endSession();
        res.status(400).json({
          status: "error",
          message: "Cannot remove user from team",
        });
    }
   
  } catch (error) {
    res.status(400).json({
      status: "error",
      message: error.message,
    });
  }
};
