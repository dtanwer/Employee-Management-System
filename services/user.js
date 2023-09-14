const mongoose = require('mongoose')
const userModel = require('../models/User.js')

exports.createUser = async (req, res) => {
    try {
        const newUser = await userModel.create(req.body)
        res.status(201).json({
            status: 'success',
            data: {
                newUser
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }	
}

exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        res.status(200).json({
            status: 'success',
            data: {
                users
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }
}

exports.getUser = async (req, res) => {
    const id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }
    try {
        const user = await userModel.findById(id)
        res.status(200).json({
            status: 'success',
            data: {
                user
            }
        })
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })

    }
}

exports.updateUser = async (req, res) => {
    const id=req.params.id
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }

    try {
        const updatedUser=await userModel.findByIdAndUpdate(id,req.body,{new:true});
        res.status(200).json({
            status: 'success',
            data: {
                updatedUser
            }
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.deleteUser = async (req, res) => {
    const id=req.params.id;
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(400).json({
            status: 'fail',
            message: 'Invalid Id'
        })
    }
    
    try {
        const deletedUser=await userModel.findByIdAndDelete(id);
        res.status(200).json({
            status: 'success',
            data: {
                deletedUser
            }
        })
        
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}