// rafce - Generate functional component (es7 extension) 

import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'
import  { SiGmail } from 'react-icons/si'
import Logo from '../assets/logo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
  //State default is false which is the setnav and nav
  // Keeping the state, nav and setnav is a created or gihunahunaan na value para sa useState naa sa sulod sa bracket ang nav og setnav since its value for the use of useState for the future
  // and returning a stateful value og function para ma update ang value og pwede ang function pud
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
        {/* hidden md:flex (THE md:?)is when the the width is 768 less it will hidden the unlisted and listed which is home,about,skills,work,contact */}
        <ul className='hidden md:flex '>
          <li>
            {/* This is from react-scroll package from npm install react-scroll */}
            <Link  to="home" smooth={true} offset={10} duration={500} >
           Home
        </Link>
        </li>
          <li> <Link  to="about" smooth={true} offset={10} duration={500} >
           About
        </Link></li>
          <li> <Link  to="skills" smooth={true} offset={10} duration={500} >
           Tech Stack
        </Link></li>
          <li> <Link  to="work" smooth={true} offset={10} duration={500} >
           Projects
        </Link></li>
          <li> <Link  to="contact" smooth={true} offset={10} duration={500} >
           Contact
        </Link></li>
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
           <li className='py-6 text-2xl'>  <Link onClick={clickHandle}  to="home" smooth={true} offset={5} duration={500} >
           Home
        </Link></li>
          <li className='py-6 text-2xl'><Link onClick={clickHandle}  to="about" smooth={true} offset={5} duration={500} >
           About
        </Link></li>
          <li className='py-6 text-2xl'><Link onClick={clickHandle} to="skills" smooth={true} offset={5} duration={500} >
           Tech Stack
        </Link></li>
          <li className='py-6 text-2xl'><Link onClick={clickHandle} to="work" smooth={true} offset={5} duration={500} >
           Work
        </Link></li>
          <li className='py-6 text-2xl'><Link onClick={clickHandle} to="contact" smooth={true} offset={5} duration={500} >
           Contact
        </Link></li>
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
            <a className='flex justify-between items-center w-full font-bold  text-gray-100' 
            href= 'https://github.com/prince0010'> 
            Github
          <FaGithub size={30}/>
          </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-900 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full	'>
             <a className='flex justify-between items-center w-full font-bold  text-gray-100'
             href='https://www.linkedin.com/in/prince-nagac-083a95148/'>
               Linkedin 
          <FaLinkedin size={30}/>
          </a></li>
          <li className='w-[160px] h-[60px] flex justify-between items-center bg-blue-400 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full'>
            <a className='flex justify-between items-center w-full font-bold  text-gray-100'
            href='https://twitter.com/kumaneko404'>
               Twitter 
               <FaTwitter size={30}/></a></li>
               <li className='w-[160px] h-[60px] flex justify-between items-center bg-red-400 ml-[-100px] hover:ml-[-7px] duration-300 rounded-r-full'>
                <a className='text-gray-100 flex font-bold justify-between items-center w-full' 
                href="mailto:princenagac12@gmail.com">
                  {/* mailto: (is for linking your email acc into smth) */}
                  Gmail
                  <SiGmail size={30}/>
                </a>
               </li>
        </ul>

      </div>
    </div>
  )
}

// it is for the Navbar function will be global and it can be import anywhere in this folder
export default Navbar