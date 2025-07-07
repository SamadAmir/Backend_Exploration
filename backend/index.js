import 'dotenv/config'
import express from 'express';

const app = express()

const PORT = process.env.PORT

app.get('/',(req,res)=>{
    res.send("Hello world!")
})

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})