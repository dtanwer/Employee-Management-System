const {
  CreateProjectIdeaService,
  UpdateProjectIdeaService,
  DeleteProjectIdeaService,
  GetProjectIdeaService,
  GetProjectIdeasService,
} = require("../services/projectIdea");

exports.createProjectIdea = async (req, res) => {
  const response = await CreateProjectIdeaService(req, res);
  return response;
};

exports.updateProjectIdea = async (req, res) => {
  const response = await UpdateProjectIdeaService(req, res);
  return response;
};

exports.deleteProjectIdea = async (req, res) => {
  const response = await DeleteProjectIdeaService(req, res);
  return response;
}

exports.getProjectIdea = async (req, res) => {
  const response = await GetProjectIdeaService(req, res);
  return response;
}

exports.getProjectIdeas = async (req, res) => {
  const response = await GetProjectIdeasService(req, res);
  return response;
}


