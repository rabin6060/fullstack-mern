import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const bookingModel = mongoose.model('Booking',bookingSchema)