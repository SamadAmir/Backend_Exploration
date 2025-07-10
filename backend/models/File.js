import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
  originalName: String,
  fileName: String,
  type: String, 
  size: Number,
  status: {
    type: String,
    enum: ['processing', 'done', 'error'],
    default: 'processing'
  }
},{
    timestamps:true
  })
  export default mongoose.model('File',fileSchema)