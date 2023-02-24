// rafce - Generate functional component (es7 extension) 

import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    // px-4 is equivalent as 1rem
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* Logo */}
        <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
      </div>
      <div className='hidden'>
        {/* menu */}
        <ul className='flex'>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamburger menu*/}
      <div className='hidden'>
        <FaBars />

      </div>

      {/* Mobile Menu */}
      <div className='hidden'>
      <ul>
      <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
      </ul>

      </div>

      {/* Social icons */}
      <div className='hidden'>
      </div>
    </div>
  )
}

export default Navbar