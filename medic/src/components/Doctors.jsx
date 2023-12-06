
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {ArrowBackIos,ArrowForwardIos} from '@mui/icons-material';
import {data} from '../utils/data'
import { useRef } from 'react';

const Doctors = () => {
    const slider = useRef(null)
    const settings = {
        accessibility: true,
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
        ],
      };
     
      

  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-16 pt-10'>
        <div className='flex flex-col items-center justify-between lg:flex-row mb-10 lg:mb-0'>
            <div>
                <h1 className='text-4xl font-semibold text-center lg:text-start'>Our Doctors</h1>
                <p className='mt-2 text-center lg:text-start'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. at.</p>
            </div>
            <div className='flex gap-5 mt-4 lg:mt-0'>
                <button className='bg-[#d5f2ec] text-backGroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]' onClick={()=>slider.current.slickPrev()} >
                <ArrowBackIos />
                </button>
               <button className='bg-[#d5f2ec] text-backGroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]' onClick={()=>slider.current.slickNext()} >
               <ArrowForwardIos/>
               </button>
                
            </div>

        </div>
        <div>
            <Slider ref={slider} {...settings}>
                {
                    data.map((e)=>(
                        <div key={e.name} className="h-[350px] text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer">
                            <div>
                                <img src={e.img} alt="img" className='h-56 rounded-t-xl w-full' />
                            </div>
                            <div className='flex flex-col justify-center items-center'>
                                <h1 className='text-xl font-semibold pt-4'>{e.name}</h1>
                                <p className='pt-2'>{e.specialties}</p>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    </div>
  )
}

export default Doctors