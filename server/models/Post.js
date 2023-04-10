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
            type: mongoose.Schema.Types.ObjectId,
            ref: "comment"

        }
    ]
},{
    timestamps: true
})


module.exports = mongoose.model('post', UserSchema);