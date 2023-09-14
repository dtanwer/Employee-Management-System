// Purpose: UserRequest controller file
const { RegisterUserService, UpdateUserService, DeleteUserService, GetUserRequestService } = require('../services/userRequest.services');
//get user request
exports.getUserRequest = async (req, res) => {
    const responce=await GetUserRequestService(req,res);
    return responce;
}
//create user request
exports.createUserRequest = async (req, res) => {
     const responce=await RegisterUserService(req,res);
     return responce;
};
//update user request
exports.updateUserRequest = async (req, res) => {
  const responce=await UpdateUserService(req,res);
  return responce;
}
//delete user request
exports.deleteUserRequest = async (req, res) => {
    const responce=await DeleteUserService(req,res);
    return responce;
}