const connectToLimbogram = require("./db")
const express = require("express")
const port = 5000;
const cors =require("cors")
connectToLimbogram();

const app = express()


app.use(cors())

app.use(express.json())

app.use('/api/auth',require('./routes/auth'));
app.use('/api/post',require('./routes/activity'));



app.listen(port,()=>{
    console.log("listening on port" + port);
})
