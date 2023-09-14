const mongoose = require('mongoose')
const ProjectIdeaSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    projectIdea: {
        type: String,
        required: true,
    },
    referenceLink: {
        type: String,
    }
},{ timestamps: true })

module.exports = mongoose.model('ProjectIdea', ProjectIdeaSchema)