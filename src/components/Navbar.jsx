// rafce - Generate functional component (es7 extension) 

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
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
        {/* hidden md:max-lg:flex (THE md:max-lg:?)is when the the width is 768 less it will hidden the unlisted and listed which is home,about,skills,work,contact */}
        <ul className='hidden md:max-lg:flex '>
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
        {/* Terninary operator if !nav is true then it will display the fnbars and if false then disaply the times */}
        {!nav ? <FaBars /> : <FaTimes />}

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
      {/* breakpoint hidden lg:flex either 1028px */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        {/* <ul className='text-zinc-900'> */}
        <ul>
              {/* ml-[-100px] (margin-left) iyang i move ang container na LI sa left and then ang hover:ml-[-7px] pag ma hover iyang i move ang container pa right side og kung mas greater than -7px na mas mugamay ang hover ana  */}
          {/* duration-300 is equivalent to 3milliseconds or 3seconds */}
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-slate-900 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full'>
            <a className='flex justify-between items-center w-full  text-gray-100' 
            href="/"> 
            Github
          <FaGithub size={30}/>
          </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-900 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full	'>
             <a className='flex justify-between items-center w-full text-gray-100'
             href="/">
               Linkedin 
          <FaLinkedin size={30}/>
          </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-400 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full'>
            <a className='flex justify-between items-center w-full text-gray-100'
            href="/">
               Twitter 
               <FaTwitter size={30}/></a></li>
        </ul>
      </div>
    </div>
  )
}

// it is for the Navbar function will be global and it can be import anywhere in this folder
export default Navbar