const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new Schema({
    username:{
        type: String,
        required: true,
        min: 3,
        max:20,
        unique: true
    },
    email:{
        type: String,
        max:50,
        unique: true
    },
    password:{
        type: String,
        required: true,
        min: 6
    },
    profilepicture:{
        type: String,
        default: ''
    },
    followers:{
        type: Array,
        default: []
    },
    following:{
        type: Array,
        default: []
    },
    isAdmin:{
        type: Boolean,
        default: false
    },
    description:{
        type: String,
        max:50
    },
    city:{
        type: String,
        max:10
    },
    occupation:{
        type:Number,
        enum:[1,2,3]
    }
},
{timestamps: true}
)


const User = mongoose.model('User',userSchema) 


module.exports =User