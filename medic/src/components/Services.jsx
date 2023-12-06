import React from 'react'
import Button from '../layouts/Button'
import ServiceCard from '../layouts/ServiceCard'
import {MedicalInformation, MedicalServices, MonitorHeart} from '@mui/icons-material';

const Services = () => {
    const icon1 = < MedicalServices />
    const icon2 = < MedicalInformation/>
    const icon3 = <MonitorHeart/>
  return (
    <div className='min-h-screen flex flex-col justify-center gap-5 px-5 lg:px-32 pt-24 lg:pt-16'>
        <div className='flex flex-col items-center lg:flex-row justify-between'>
            <div className='flex-1'>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Services.</h1>
                <p className='mt-2 text-center lg:text-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus non quos nihil deleniti mollitia, corrupti nam impedit, temporibus obcaecati veritatis nesciunt fuga laborum! Modi cum unde id qui, eligendi nam.</p>
            </div>
            <div className='flex-1 text-end mt-4 lg:mt-0'>
                <Button title='Our Services'/>
            </div>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 pt-14'>
            <ServiceCard icon={icon1} title="Lab Test" />
            <ServiceCard icon={icon2} title="Health Check" />
            <ServiceCard icon={icon3} title="Heart Health" />
        </div>
    </div>
  )
}

export default Services