const {
  GetTeamService,
  GetTeamsService,
  CreateTeamService,
  UpdateTeamService,
  DeleteTeamService,
  AddTeamMemberService,
  RemoveTeamMemberService,
} = require("../services/team");

exports.createTeam = async (req, res) => {
    const response = await CreateTeamService(req, res);
    return response;
}

exports.updateTeam = async (req, res) => {
    const response = await UpdateTeamService(req, res);
    return response;
}

exports.deleteTeam = async (req, res) => {
    const response = await DeleteTeamService(req, res);
    return response;
}

exports.getTeam = async (req, res) => {
    const response = await GetTeamService(req, res);
    return response;
}

exports.getTeams = async (req, res) => {
    const response = await GetTeamsService(req, res);
    return response;
}

exports.addTeamMember = async (req, res) => {
    const response = await AddTeamMemberService(req, res);
    return response;
}

exports.removeTeamMember = async (req, res) => {
    const response = await RemoveTeamMemberService(req, res);
    return response;
}