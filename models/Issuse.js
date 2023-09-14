const mongoose = require('mongoose')
const IssuseSchema = new mongoose.Schema({
    userId: {
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

module.exports = mongoose.model('Issuse', IssuseSchema)	