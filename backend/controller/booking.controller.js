import { errorHandler } from "../errorHandler.js"
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
        if (!data) next(errorHandler(201,"something went wrong .."))
        res.status(200).json(data)
    } catch (error) {
        next(error)
    }
}