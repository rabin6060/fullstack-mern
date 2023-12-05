import React, { useState } from 'react'
import {Link} from 'react-scroll'
import {Close,Menu} from '@mui/icons-material';

const Navbar = () => {
    const [menu,setMenu] = useState(false)
    const handleChange = ()=>{
        setMenu(prev=>!prev)
    }
    const closeMenu = ()=>{
        setMenu(false)
    }
  return (
    <div className='fixed w-full z-10 text-white'>
        <div>
            <div className='flex flex-row justify-between py-5 md:px-32 px-5 bg-backGroundColor shadow-[rgba(0,_0,_0,0.24),_0,_3,_8] '>
                <div className='flex items-center justify-center cursor-pointer'>
                    <Link>
                    <h1 className='text-3xl lg:text-2xl font-semibold'>Wellness Visit.</h1>
                    </Link>
                </div>
                <nav className='hidden lg:flex items-center justify-center text-lg font-medium gap-8'>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >About us</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Services</Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Doctors</Link>
                    <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Blog</Link>
                </nav>
                <div className='hidden lg:flex'>
                    <button className='px-5 py-3 bg-brightColor hover:bg-hoverColor transition duration-200 ease-in-out rounded-lg text-lg text-white'>Contact Us</button>
                </div>
                <div className='lg:hidden flex items-center'>
                    {
                        menu? <Close fontSize='large' onClick={handleChange}/> :
                        <Menu fontSize='large' onClick={handleChange}/>
                    }
                </div>
            </div>
            <div className={`${menu ? 'translate-x-0': '-translate-x-full'} lg:hidden w-full h-fit flex flex-col gap-8 absolute bg-backGroundColor top-17 left-0 pt-8 pb-4 font-semibold text-3xl text-white text-center`}>
                    <Link to='home' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Home</Link>
                    <Link to='about' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >About us</Link>
                    <Link to='services' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Services</Link>
                    <Link to='doctors' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Doctors</Link>
                    <Link to='blog' spy={true} smooth={true} duration={500} className='hover:text-hoverColor transition-all cursor-pointer' >Blog</Link>
                    <div className=''>
                    <button className='px-5 py-3 bg-brightColor hover:bg-hoverColor transition duration-200 ease-in-out rounded-lg text-2xl lg:text-lg text-white'>Contact Us</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar