// rafce - Generate functional component (es7 extension) 

import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {

  // Keeping the state, nav and setnav is a created or gihunahunaan na value para sa useState naa sa sulod sa bracket ang nav og setnav since its value for the use of useState for the future
  const [nav, setnav] = useState(false)
  //Click function with () => (and it is common convention with an arrow function) and no gonna use a bracket since its only one-
  //that we're going to set the value of nav which is the opposite of nav ex: setnav(!nav) so if its true it will set it as a false and if its false it will set it as a true
  //Opposite is exclamation mark (!nav) false to true or true to false
  const clickHandle = () => setnav(!nav)
  return (
    // px-4 is equivalent as 1rem
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        {/* Logo */}
        <img src={Logo} alt="Logo Image" style={{width: '50px'}} />
      </div>
        {/* menu */}
        {/* hidden md:flex is when the the width is 768 less it will hidden the unlisted and listed which is home,about,skills,work,contact */}
        <ul className='hidden md:flex '>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>

      {/* Hamburger menu*/}
      {/* md:hidden if the width is equal to 768px or it comes to the medium width then it will not hidden the FaBars and it will hidden the home,about,skills,work and contact in the upper portion */}
      {/* z-10 this is where it will display the hamburger icon while its on mobile menu in the mobile menu panel design */}
      <div onClick={clickHandle} className='md:hidden z-10'>
        <FaBars />

      </div>

      {/* Mobile Menu */}
      {/* // We will gonna use ###ternary operator### */}
      {/* if nav is true then it will set the style hidden and the <li> in mobile menu version and if its false then the style will display and its li as well in mobile version */}
      
      <div className= {!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
      <ul>
           <li className='py-6 text-2xl'>Home</li>
          <li className='py-6 text-2xl'>About</li>
          <li className='py-6 text-2xl'>Skills</li>
          <li className='py-6 text-2xl'>Work</li>
          <li className='py-6 text-2xl'>Contact</li>
      </ul>

      </div>

      {/* Social icons */}
      <div className='hidden'>
      </div>
    </div>
  )
}

export default Navbar