const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const postRoute = require("./postRoute")

dotenv.config({path:"./config.env"})

mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("database connected")
}).catch((error)=>{console.log(error)})

app.use(express.json())
app.use("/posts",postRoute)
const port = process.env.port || 8000
app.listen(port,"127.0.0.1",()=>{
    console.log("server running")
})