const {
  CreateHolidayService,
  UpdateHolidayService,
  DeleteHolidayService,
  GetHolidayService,
  GetAllHolidaysService,
} = require("../services/holidays");

exports.createHoliday = async (req, res) => {
    const response = await CreateHolidayService(req, res);
    return response;
}

exports.updateHoliday = async (req, res) => {
    const response = await UpdateHolidayService(req, res);
    return response;
}

exports.deleteHoliday = async (req, res) => {
    const response = await DeleteHolidayService(req, res);
    return response;
}

exports.getHoliday = async (req, res) => {
    const response = await GetHolidayService(req, res);
    return response;
}

exports.getAllHolidays = async (req, res) => {
    const response = await GetAllHolidaysService(req, res);
    return response;
}