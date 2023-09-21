const mongoose = require('mongoose');

const teamSchema = mongoose.Schema({
    teamName:{
        type:String,
        required:true
    },
    teamMembers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    teamLeader:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    teamProject:{
        type:String,
        ref:'Project'
    }
})

module.exports = mongoose.model('Team',teamSchema);