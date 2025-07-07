import user from "../models/User.js";

export const register = async (req,res)=>{
    try{
        const {name,email,password} = req.body
        const newUser = await user.create({
            name,email,password
        })
        res.status(201).json(newUser)

    }
    catch (err){
        res.status(400).json({message:err.message})
    }
}

export const getUser = async (req,res)=>{
    try{
        const users = await user.find()
        res.status(200).json(users)
    }
    catch (err){
        res.status(400).json({message:err.message})
    }
}

export const getUserbyID = async (req,res)=>{
    try{
        const newuser = await user.findById(req.params.id)
        res.status(200).json(newuser)
    }
    catch (err){
        res.status(400).json({message:err.message})
    }
}

export const deleteUser = async (req,res)=>{
    try{
    const deleteduser = await user.findByIdAndDelete(req.params.id)
    res.status(200).json(deleteduser)
    }
    catch (err){
        res.status(400).json({message:err.message})
    }
}

export const editUser = async (req,res)=>{
    try{
        const {name , email , password} = req.body;
        const editedUser = await user.findByIdAndUpdate(req.params.id,{name,email,password},{new:true})
        if(!editedUser)
        {
            return res.status(404).json({ message: "User not found" });

        }
        res.status(200).json(editedUser)
    }
    catch(err)
    {
        res.status(400).json({message:err.message})
    }


}