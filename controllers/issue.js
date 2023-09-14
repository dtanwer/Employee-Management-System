const {
  GetIssueService,
  GetIssuesService,
  CreateIssueService,
  DeleteIssueService,
  UpdateIssueService,
} = require("../services/issue");

exports.getIssue = async (req, res) => {
  const response = await GetIssueService(req, res);
  return response;
};

exports.createIssue = async (req, res) => {
  const response = await CreateIssueService(req, res);
  return response;
};

exports.updateIssue = async (req, res) => {
  const response = await UpdateIssueService(req, res);
  return response;
};

exports.deleteIssue = async (req, res) => {
  const response = await DeleteIssueService(req, res);
  return response;
};

exports.getIssues = async (req, res) => {
  const response = await GetIssuesService(req, res);
  return response;
}


