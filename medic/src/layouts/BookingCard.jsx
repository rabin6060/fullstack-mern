import React from 'react'

export default function BookingCard({booking}) {
    console.log(booking)
  return (
    <div className='group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,0.24)_0px_3px_8px] rounded-lg cursor-pointer
        hover:-translate-y-5 transition duration-300 ease-in-out'>
        <div className='bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]'></div>
        <h2>{booking.firstName} <span>{booking.lastName}</span></h2>
        <p>{booking.email}</p>
        <p>{booking.phone}</p>
        <h3 className='text-backGroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out'>Learn More.</h3>
    </div>
  )
}
