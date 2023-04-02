const mongoose = require('mongoose');
const {Schema} = mongoose
const UserSchema = new Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    URL:{
        type: String,
    } ,
    description:{
        type: String,
    },
    likes: Number,
    date:{
        type:Date,
        default: Date.now
    },
    Comment:{
        commentBy:{type: mongoose.Schema.Types.ObjectId},
        commentOn:{
            type : Date,
            default: Date.now
        }

    },
    share:{
        shareBy:{type: mongoose.Schema.Types.ObjectId},
        shareOn:{
            type : Date,
            default: Date.now
        }
    }

})


module.exports =mongoose.model('post',UserSchema);