const {
  GetFeedbackService,
  CreateFeedbackService,
  UpdateFeedbackService,
  DeleteFeedbackService,
  GetFeedbacksService,
} = require("../services/feedback");

exports.getFeedback = async (req, res) => {
  const response = await GetFeedbackService(req, res);
  return response;
};

exports.createFeedback = async (req, res) => {
  const response = await CreateFeedbackService(req, res);
  return response;
}

exports.updateFeedback = async (req, res) => {
  const response = await UpdateFeedbackService(req, res);
  return response;
}

exports.deleteFeedback = async (req, res) => {
  const response = await DeleteFeedbackService(req, res);
  return response;
}

exports.getFeedbacks = async (req, res) => {
  const response = await GetFeedbacksService(req, res);
  return response;
}
