import express from 'express';
import dotenv from "dotenv"
dotenv.config();
const app = express()
app.use((err,req,res,next)=>{
    console.error(err.stack);
    next()
})
app.get("/",(req,res)=>{
    res.send("helllo world")
})
app.listen(process.env.port,()=>{
    console.log("app is running on port " + process.env.port);
})