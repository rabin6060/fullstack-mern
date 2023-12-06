import React from 'react'
import img from '../assets/img/about.jpg'

const About = () => {
  return (
    <div className='min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5'>
        <div className='w-full lg:w-3/4 space-y-5'>
            <h1 className='text-4xl font-semibold text-center lg:text-start'>
                About Us.
            </h1>
            <p className='text-justify lg:text-start'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, nisi. Atque sint laboriosam hic porro provident saepe possimus obcaecati laborum minus nesciunt incidunt eligendi ducimus soluta, nisi animi quisquam consequatur.
            </p>
            <p className='text-justify lg:text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum laboriosam natus dicta debitis veritatis consequatur tempore a, dolorem officia minima ratione, ut eius eligendi culpa repellendus omnis? Obcaecati, ipsum ratione!
            </p>
            <p className='text-justify lg:text-start'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet error quod excepturi voluptate eligendi officiis odit assumenda. Culpa voluptatem atque quos iste ut recusandae consectetur eos consequatur eligendi dolorem. Ab!
            </p>
        </div>
        <div className='w-full lg:w-3/4'>
            <img src={img} alt="img" className='rounded-lg' />
        </div>
    </div>
  )
}

export default About