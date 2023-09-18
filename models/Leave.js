const mongoose=require('mongoose')
const LeaveSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },
    leaveType:{
        type:String,
        required:true,
        enum:["Sick Leave","Casual Leave","Earned Leave","Floating Leave"]
    },
    startDate:{
        type:Date,
        required:true,
    },
    endDate:{
        type:Date,
        required:true,
    },
    status:{
        type:String,
        required:true,
        enum:["pending","approved","rejected"]
    },
    reason:{
        type:String,
        required:true,
    },
    comment:{
        type:String,
    },
    submittedBy:{
        type:String,
        required:true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'is invalid Email'],
    }
},{timestamps:true})

module.exports=mongoose.model('Leave',LeaveSchema);