const {createUser,getUser,getUsers,updateUser,deleteUser}=require('../services/user.js');

exports.getUsers = async (req, res) => {
    const responce= await getUsers(req,res);
    return responce;
}

exports.getUser = async (req, res) => {
    const responce= await getUser(req,res);
    return responce;
}

exports.createUser = async (req, res) => {
    const responce= await createUser(req,res);
    return responce;
}

exports.updateUser = async (req, res) => {
    const responce= await updateUser(req,res);
    return responce;
}

exports.deleteUser = async (req, res) => {
    const responce= await deleteUser(req,res);
    return responce;
}
