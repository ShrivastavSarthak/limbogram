const mongoose = require('mongoose');
const { Schema } = mongoose
const UserSchema = new Schema({
    userId: {
        type: String,
        required: true
    },
    description: {
        type: String,
        max: 200
    },
    imgage: {
        type: String
    },
    likes: {
        type: Array,
        default: []
    },
    comment: [
        {
            userId: String,
            userComment: String,
            commentOn: {
                type: Date,
                default: Date.now
            }

        }
    ]
},{
    timestamps: true
})


module.exports = mongoose.model('post', UserSchema);