const mongoose = require('mongoose');

const chatSchema = mongoose.Schema({
    senderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    teamId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Team'
    },
    message:{
        type:String,
        required:true
    }
},{timestamps:true})

module.exports = mongoose.model('Chat',chatSchema);