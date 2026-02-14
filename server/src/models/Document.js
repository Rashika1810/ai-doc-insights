import mongoose from 'mongoose';

const documentSchema=new mongoose.Schema({
    filename:String,
    originalName:String,
    textContent:String,
    uploadedAt:{
        type:Date,
        default:Date.now
    },
},
{timestamps:true})

export default mongoose.model("Document",documentSchema);