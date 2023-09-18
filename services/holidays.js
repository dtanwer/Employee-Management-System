const holidaysModel = require('../models/Holidays');

exports.CreateHolidayService = async (req, res) => {
    const holiday = req.body;
    try {
        const newHoliday = new holidaysModel(holiday);
        await newHoliday.save();
        res.status(201).json({
            status: 'success',
            message: 'Holiday created successfully',
            data: newHoliday,
        });
    } catch (error) {
        res.status(409).json({ status: 'error', message: error.message });
    }
}

exports.UpdateHolidayService = async (req, res) => {
    const { id: _id } = req.params;
    const holiday = req.body;
    try {
        const updatedHoliday=await holidaysModel.findByIdAndUpdate(_id, holiday, {new: true});
        res.status(200).json({
            status: 'success',
            message: 'Holiday updated successfully',
            data: updatedHoliday,
        })
    } catch (error) {
        res.status(409).json({ status: 'error', message: error.message });
    }
}

exports.DeleteHolidayService = async (req, res) => {
    const { id: _id } = req.params;
    try {
        await holidaysModel.findByIdAndRemove(_id);
        res.status(200).json({
            status: 'success',
            message: 'Holiday deleted successfully',
        })
    } catch (error) {
        res.status(409).json({ status: 'error', message: error.message });
    }
}

exports.GetHolidayService = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const holiday = await holidaysModel.findById(_id);
        res.status(200).json({
            status: 'success',
            message: 'Holiday fetched successfully',
            data: holiday,
        })
    } catch (error) {
        res.status(409).json({ status: 'error', message: error.message });
    }
}

exports.GetAllHolidaysService = async (req, res) => {
    try {
        const holidays = await holidaysModel.find();
        res.status(200).json({
            status: 'success',
            message: 'Holidays fetched successfully',
            data: holidays,
        })
    } catch (error) {
        res.status(409).json({ status: 'error', message: error.message });
    }
}