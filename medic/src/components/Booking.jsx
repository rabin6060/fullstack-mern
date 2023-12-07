import React, { useEffect, useState } from 'react'
import BookingCard from '../layouts/BookingCard'

export default function Booking() {
    const [bookings,setBookings] = useState([])
    
    useEffect(()=>{
        fetch("/api/medic/getAllBookings")
        .then(response=>response.json())
        .then(data=>setBookings(data))
    },[])
  return (
    <div className='min-h-screen flex flex-col justify-center items-center gap-10 px-5 lg:px-20 pt-5 lg:pt-20'>
        <h1 className='text-4xl font-semibold text-center lg:text-start'>Bookings</h1>
        <div className='w-full lg:w-3/4 flex flex-col flex-wrap lg:flex-row gap-5 '>
            {
                bookings?.map((booking,i)=>(
                    <BookingCard booking={booking} key={i}/>
                ))
            }
        </div>
    </div>
  )
}
