const feedbackModel = require('../models/Feedback');

exports.CreateFeedbackService = async (req, res) => {
    const feedback = req.body;
    try {
        const newFeedback = new feedbackModel(feedback);
        await newFeedback.save();
        res.status(201).json(
            {
                message: "Feedback created successfully",
                data: newFeedback
            }
        );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.UpdateFeedbackService = async (req, res) => {
    const { id: _id } = req.params;
    const feedback = req.body;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No feedback with that id");
    try {
        const updatedFeedback = await feedbackModel.findByIdAndUpdate(
            _id,
            feedback,
            { new: true }
        );
        res.status(200).json({
            message: "Feedback updated successfully",
            data: updatedFeedback
        });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.DeleteFeedbackService = async (req, res) => {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).send("No feedback with that id");
    try {
        await feedbackModel.findByIdAndRemove(_id);
        res.status(200).json({ message: "Feedback deleted successfully" });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

exports.GetFeedbacksService = async (req, res) => {
    try {
        const feedback = await feedbackModel.find();
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

exports.GetFeedbackService = async (req, res) => {
    const { id: _id } = req.params;
    try {
        const feedback = await feedbackModel.findById(_id);
        res.status(200).json(feedback);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}