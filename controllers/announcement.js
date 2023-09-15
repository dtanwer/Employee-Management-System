const {
  GetAnnouncementService,
  CreateAnnouncementService,
  DeleteAnnouncementService,
  GetAnnouncementsService,
  UpdateAnnouncementService
} = require("../services/announcement");

exports.createAnnouncement = async (req, res) => {
    const response = await CreateAnnouncementService(req, res);
    return response;
}

exports.updateAnnouncement = async (req, res) => {
    const response = await UpdateAnnouncementService(req, res);
    return response;
}

exports.deleteAnnouncement = async (req, res) => {
    const response = await DeleteAnnouncementService(req, res);
    return response;
}

exports.getAnnouncement = async (req, res) => {
    const response = await GetAnnouncementService(req, res);
    return response;
}

exports.getAnnouncements = async (req, res) => {
    const response = await GetAnnouncementsService(req, res);
    return response;
}