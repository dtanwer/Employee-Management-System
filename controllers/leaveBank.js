const e = require('express');
const {createLeaveBankService, getLeaveBanksService, getLeaveBankService, updateLeaveBankService} = require('../services/leaveBank');

exports.createLeaveBank = async (req, res) => {
    const response = await createLeaveBankService(req, res);
    return response;
}

exports.getLeaveBanks = async (req, res) => {
    const response = await getLeaveBanksService(req, res);
    return response;
}

exports.getLeaveBank = async (req, res) => {
    const response = await getLeaveBankService(req, res);
    return response;
}

exports.updateLeaveBank = async (req, res) => {
    const response = await updateLeaveBankService(req, res);
    return response;
}