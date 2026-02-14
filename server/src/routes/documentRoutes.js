import express from "express";
import upload from "../middleware/uploadMiddleware.js";

const router=express.Router();

router.post("/upload",upload.single("document"),(req,res)=>{
    if(!req.file)
    {
        return res.status(400).json({message:"No file uploaded"});
    }
    res.json({
        message:"File uploaded successfully",
        file:{
            originalName:req.file.originalname,
            savedName:req.file.filename,
            path:req.file.path,
            size:req.file.size
        }
    })
})

export default router;
