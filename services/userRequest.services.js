const mongoose = require("mongoose");
const userRequestModel = require("../models/UserRequest");

const producer = require("../message-brokers/brokerConnection");
const UserProducer = require("../message-brokers/producers/userProducer");
const { use } = require("../app");

const userProducer = new UserProducer(producer);

exports.RegisterUserService = async (req, res) => {
  const routingKey = process.env.ROUTING_KEY;
  const userRequest = req.body;

  const session = await mongoose.startSession();

  try {
    session.startTransaction();
    const newUserRequest = new userRequestModel(userRequest);
    const userRequestResponse = await newUserRequest.save({ session: session });
    const isMessagePublished = await userProducer.produceUserRequest(
      routingKey,
      userRequestResponse
    );

    if (userRequestResponse && isMessagePublished) {
        await session.commitTransaction();
        session.endSession();
        res.status(201).json(userRequestResponse);

    }
    else{
        await session.abortTransaction();
        session.endSession();
        res.status(409).json({ message: "Unable to publish User Request" });
    }
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.UpdateUserService = async (req, res) => {
  const { id: _id } = req.params;
  const userRequest = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No user request with that id");
  try {
    const updatedRequest = await userRequestModel.findByIdAndUpdate(
      _id,
      userRequest,
      { new: true }
    );
    res.status(200).json(updatedRequest);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.DeleteUserService = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No user request with that id");
  try {
    await userRequestModel.findByIdAndRemove(_id);
    res.status(200).json({ message: "User request deleted successfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

exports.GetUserRequestService = async (req, res) => {
  try {
    const userRequest = await userRequestModel.find();
    res.status(200).json(userRequest);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


