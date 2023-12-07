import express from 'express'

const app = express()

app.listen(8000,()=>{
    console.log("server started at 8000 port.");
})

app.get('/test',(req,res)=>{
    res.status(200).json("test successfull.")
})