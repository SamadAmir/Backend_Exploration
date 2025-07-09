import user from "../models/User.js";
import bcrypt from "bcrypt"
import { generateToken } from "../utils/generateWebtoken.js";

export const register = async (req,res)=>{
    try{
    const {name,email,password}=req.body;
    const existedUser = await user.findOne({email})
    if(existedUser)
    {
        res.status(400).json({message : "User already exists"})
    }
    const hashedpassword = await bcrypt.hash(password,10)
    const newUser = await user.create({
        name,email,password:hashedpassword
    })
    res.status(200).json({
        _id:newUser._id,
        name:newUser.name,
        token:generateToken(newUser._id)
    })
   }
   catch(err)
   {
    res.status(400).json({message : err.message})
   }
}

export const login = async (req,res)=>{
    try{
        const {email,password} = req.body;
        const NewUser = await user.findOne({email})
        if(!NewUser){
            res.status(400).json({message:"User doesnot exist"})
        }
        const isMatch = await bcrypt.compare(password,NewUser.password)
        if(!isMatch)
        {
            res.status(400).json({message:"Wrong Password"})
        }
        res.status(200).json({
            _id:NewUser._id,
            email:NewUser.email,
            token:generateToken(NewUser._id),
            message:"Login Successfully"
        })

    }
    catch(err)
    {
        res.status(500).json({message:err.message})
    }
}