const mongoose = require('mongoose')
const IssueSchema = new mongoose.Schema({
    userId: {

        //TODO: What is this can you explain?
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    subject:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
        enum:["HR","IT","Finance","Other"]
    },
    description: {
        type: String,
        required: true,
    },
    referenceLink: {
        type: String,
    },
    status:{
        type:String,
        required:true,
        enum:["pending","resolved"]
    },
    comment:{
        type:String,
    }
},{ timestamps: true })

module.exports = mongoose.model('Issue', IssueSchema)	