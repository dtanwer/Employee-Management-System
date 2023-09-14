const {
  GetTeamService,
  GetTeamsService,
  CreateTeamService,
  UpdateTeamService,
  DeleteTeamService,
  AddTeamMemberService,
  RemoveTeamMemberService,
} = require("../services/team");

exports.CreateTeam = async (req, res) => {
    const response = await CreateTeamService(req, res);
    return response;
}

exports.UpdateTeam = async (req, res) => {
    const response = await UpdateTeamService(req, res);
    return response;
}

exports.DeleteTeam = async (req, res) => {
    const response = await DeleteTeamService(req, res);
    return response;
}

exports.GetTeam = async (req, res) => {
    const response = await GetTeamService(req, res);
    return response;
}

exports.GetTeams = async (req, res) => {
    const response = await GetTeamsService(req, res);
    return response;
}

exports.AddTeamMember = async (req, res) => {
    const response = await AddTeamMemberService(req, res);
    return response;
}

exports.RemoveTeamMember = async (req, res) => {
    const response = await RemoveTeamMemberService(req, res);
    return response;
}