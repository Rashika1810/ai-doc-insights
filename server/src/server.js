const express=require('express');
const { default: connectDB } = require('./config/db');
require('dotenv').config();

const app=express();

// connect to DB
connectDB();

app.use(express.json());

app.get("/",(req,resp)=>{
    resp.send("API is running");
})
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})