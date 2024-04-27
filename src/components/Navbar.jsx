import { NavLink } from 'react-router-dom'
import React from 'react'

const Navbar = () => {
  return (
    <>
    <header className='w-full bg-lighting shadow-sm font-sans top-0 left-0 fixed z-5'>
        <nav className='md:mx-10'>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <h1 className='text-secondary font-bold text-3xl'>Portfolio</h1>
                    <div className='md:block hidden'>
                        <ul className='flex gap-5 justify-between items-center text-white font-small p-1'>
                            <li className='border-b-4 border-transparent hover:border-b-4 hover:border-secondary duration-300 cursor-pointer'><a href="#home">Home</a></li>
                            <li className='border-b-4 border-transparent hover:border-b-4 hover:border-secondary duration-300 cursor-pointer'><a href="#projects">Projects</a></li>
                            <li className='border-b-4 border-transparent hover:border-b-4 hover:border-secondary duration-300 cursor-pointer'><a href="#aboutme">About me</a></li>
                            <li className='border-b-4 border-transparent hover:border-b-4 hover:border-secondary duration-300 cursor-pointer'><a href="#contactus">Contact Us</a></li>
                        </ul>
                    </div> 
                    {/* menu-bar icon */}
                    <div className='md:hidden block'>
                        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </nav>
    </header>
    </>
  )
}

export default Navbar
