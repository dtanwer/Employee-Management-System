const mongoose=require('mongoose')
const LeaveBankSchema=new mongoose.Schema({
    casualLeave:{
        type:Number,
        default:7,
    },
    sickLeave:{
        type:Number,
        default:5,
    },
    earnedLeave:{
        type:Number,
        default:18,
    },
    floatingLeave:{
        type:Number,
        default:2,
    },
},{timestamps:true})

module.exports=mongoose.model('LeaveBank',LeaveBankSchema)