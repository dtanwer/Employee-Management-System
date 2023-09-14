const mongoose=require('mongoose')

const UserSchema=new mongoose.Schema({

    userBasicData:{
        businessDomain:{
            type:String,
            required:true,
        },
        name:{
            type:String,
            required:true,
        },
        lastName:{
            type:String,
        },
        headquarters:{
            type:String,
            required:true,
            enum:["headquarters1","headquarters2","headquarters3"]
        },
        role:{
            type:String,
            required:true,
        },
        additionalIndications:{
            type:String,
            required:true,
        }
        
    },

    UserEmails:[{
        accountName:{
            type:String,
            required:true,
        },
        workspaceEmail:{
            type:String,
            required:true,
            enum:["workspaceEmail1","workspaceEmail2","workspaceEmail3"]
        }	
    }],

    UserSystemManagement:{
        submittedBy:{
            type:String,
            required:true,
            match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'is invalid Email'],
        },
        accountName:{
            type:String,
            required:true,
        },
        userSystems:[{
            system:{
                type:String,
                required:true,
                enum:["system1","system2","system3"]
            },
            headquarters:{
                type:String,
                required:true,
                enum:["headquarters1","headquarters2","headquarters3"]
            },
            apps:{
                type:String,
                required:true,
                enum:["apps1","apps2","apps3"]
            },
            UserCampusManagement:{
                accountName:{
                    type:String,
                    required:true,
                },
                userCampus:[{
                    campus:{
                        type:String,
                        required:true,
                        enum:["campus1","campus2","campus3"]
                    },
                    area:{
                        type:String,
                        required:true,
                        enum:["area1","area2","area3"]
                    }
                }]
            },
            UserService:{
                userName:{
                    type:String,
                    required:true,
                },
                contactEmail:{
                    type:String,
                    required:true,
                },
                directories:{
                    type:String,
                    required:true,
                },
                trainingCourses:[{
                    type:String,
                    required:true,
                }]

            }
        }]
    }
},

{timestamps:true}

)

module.exports=mongoose.model('User', UserSchema)



