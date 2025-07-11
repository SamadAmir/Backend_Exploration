import 'dotenv/config'
import express from 'express';
import connectDB from './config/db.js';

//routes
import userRoute from './routes/userRoute.js';
import authRoute from './routes/authRoute.js'
import uploadRoute from './routes/uploadRoute.js'

//environment variables
const uri = process.env.MONGODB_URL
const PORT = process.env.PORT

//configs
const app = express()
connectDB()

app.use(express.json());

app.use('/api/users',userRoute)
app.use('/api/auth',authRoute)
app.use('/api',uploadRoute)

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
