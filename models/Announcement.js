const mongoose = require('mongoose')
const AnnouncementSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    announcement: {
        type: String,
        required: true,
    },
    referenceLink: {
        type: String,
    },
    announcementType:{
        type:String,
        required:true,
        enum:["general","project","event","other"]
    }
},{ timestamps: true })

module.exports = mongoose.model('Announcement', AnnouncementSchema)