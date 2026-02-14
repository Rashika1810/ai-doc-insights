import express from 'express'
import connectDB from "./config/db.js"
import dotenv from "dotenv";
import documentRoutes from "./routes/documentRoutes.js";


dotenv.config();

const app=express();

// connect to DB
connectDB();

app.use(express.json());

app.use("/api/documents",documentRoutes)

app.get("/",(req,resp)=>{
    resp.send("API is running");
})
const PORT=process.env.PORT || 5000;

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`);
})