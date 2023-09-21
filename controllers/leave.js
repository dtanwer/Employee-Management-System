const {
  GetLeaveService,
  GetLeavesService,
  CreateLeaveService,
  UpdateLeaveService,
  DeleteLeaveService,
  GetLeavesForTechLeadService
} = require("../services/leave");

exports.getLeave = async (req, res) => {
  const response = await GetLeaveService(req, res);
  return response;
}

exports.createLeave = async (req, res) => {
  const response = await CreateLeaveService(req, res);
  return response;
}

exports.updateLeave = async (req, res) => {
  const response = await UpdateLeaveService(req, res);
  return response;
}

exports.deleteLeave = async (req, res) => {
  const response = await DeleteLeaveService(req, res);
  return response;
}

exports.getLeaves = async (req, res) => {
  const response = await GetLeavesService(req, res);
  return response;
}

exports.getLeavesForTechLead = async (req, res) => {
  const response = await GetLeavesForTechLeadService(req, res);
  return response;
}

