import express from 'express';
import { bookingDetails, createBooking } from '../controller/booking.controller.js';

const router = express.Router()

router.post('/newBooking',createBooking)
router.get('/getAllBookings',bookingDetails)

export default router