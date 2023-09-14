const {loginUserServices} = require('../services/auth');

exports.loginUser = async (req, res) => {
    const response = await loginUserServices(req, res);
    return response;
}