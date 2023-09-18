const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phone:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'is invalid Email'],
    },
    password:{
        type:String,
        default:'123'
    },
    team:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Team'
        }
    ],
    teamLead:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'
        }
    ],
    leaveBankId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'LeaveBank'
    },
    userType:{
        type:String,
        required:true,
        enum:["admin","techlead","employee","intern"]
    },
    previousLeaveMonth:{
        type:Number,
        default:0,
        enum:[0,1,2,3,4,5,6,7,8,9,10,11,12],
    }
},
{timestamps:true}
)

module.exports=mongoose.model('User',UserSchema)



