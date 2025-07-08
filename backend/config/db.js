import mongoose from "mongoose";

const uri = process.env.MONGODB_URL

async function connectDB() {
    try{
 await mongoose.connect(uri);

    console.log("MongoDB connected")
} catch (err)
{
    console.log(`Error at connection ${err}`)
    process.exit(1)
}
    
};
export default connectDB