import mongoose from "mongoose";

const userScehma = new mongoose.Schema({
    name: {type:String, required:true},
    email : {type:String, required:true},
    password : {type:String, required:true}
},{
    timestamps:true
});
const user = mongoose.model('User',userScehma);
export default user;