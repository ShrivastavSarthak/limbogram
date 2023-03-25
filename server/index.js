const connectToLimbogram = require("./db")
const express = require("express")
const port = 5000;
connectToLimbogram();

const app = express()

app.use(express.json())

app.use('/api/auth',require('./routes/auth'));

app.listen(port,()=>{
    console.log("listening on port" + port);
})
