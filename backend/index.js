import express from 'express'
import mongoose from 'mongoose'
import bookRoute from './routes/booking.route.js'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

app.use(express.json())

const connect = () => {
     mongoose.connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error connecting to MongoDB:', error);
    });
  }

app.listen(process.env.PORT,()=>{
    console.log(`server started at ${process.env.PORT} port.`);
    connect()
})

app.get('/test',(req,res)=>{
    res.status(200).json("test successfull.")
})

app.use('/api/medic',bookRoute)

app.use((err,req,res,next)=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error."
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
})