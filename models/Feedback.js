const mongoose = require('mongoose')
const FeedbackSchema = new mongoose.Schema({
    anonymousName: {
        type: String,
        default: 'Anonymous'
    },
    feedback: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('Feedback', FeedbackSchema)
