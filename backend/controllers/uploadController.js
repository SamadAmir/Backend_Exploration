import File from "../models/File.js";

export const uploadFile = async ( req,res )=>{
    try{
    const file = req.file
    const newFile = File.create({
        userId : req.user._id,
        originalName : req.user.originalName,
        fileName : req.user.fileName,
        type: file.mimetype.startsWith('video') ? 'video' : 'image',
        size: file.size

    })
    res.status(200).json({
        message : "File uploaded Successfully",
        fileId : newFile._id
    })
}catch(err)
{
    res.status(500).json({message : err.message})
}

}
