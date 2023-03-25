const mongoose = require('mongoose')
const mongouri="mongodb+srv://sarthak:20112002@cluster0.w4r2isl.mongodb.net/test"

const connectToLimbogram =  ()=>{
    mongoose.connect(mongouri).then(
        ()=>{

            console.log("connect to limbogram");
        }
    )
}

module.exports = connectToLimbogram