import { bookingModel } from "../model/booking.model.js"

export const createBooking =async (req,res,next) => {
    try {
        const booking = await bookingModel.create(req.body)
        res.status(200).json(booking)
    } catch (error) {
        next(error)
    }
}

export const bookingDetails = async (req,res,next)=>{
    try {
        const data = await bookingModel.find()
    } catch (error) {
        next(error)
    }
}