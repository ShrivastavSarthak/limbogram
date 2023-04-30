const mongoose = require('mongoose');
const { Schema } = mongoose
const {ObjectId} = mongoose.Schema.Types
const UserSchema = new Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        max: 200
    },
    image: {
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