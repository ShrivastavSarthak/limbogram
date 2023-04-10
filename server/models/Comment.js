const mongoose = require('mongoose');
const { Schema } = mongoose
const UserSchema = new Schema({
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "post"
    },
    userId:{
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: "plese enter this field"
    }
    
}, {
    timestamps: true
})


module.exports = mongoose.model('comment', UserSchema);